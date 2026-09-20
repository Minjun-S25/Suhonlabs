import { NextResponse } from "next/server";

import { validateContact, type ContactPayload } from "@/lib/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Contact endpoint.
 *
 * Submissions are forwarded as JSON to CONTACT_FORWARD_URL — a form provider,
 * a mail relay, or an internal webhook. Nothing is stored here.
 *
 * With no forwarding URL configured the route returns 503 and says so plainly,
 * rather than accepting a message and dropping it.
 */
export async function POST(request: Request) {
  let body: Partial<ContactPayload> & { company?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Expected a JSON body." }, { status: 400 });
  }

  // Honeypot — silently accept so a bot has nothing to tune against.
  if (body.company) {
    return NextResponse.json({ message: "Thanks — your message is on its way." });
  }

  const errors = validateContact(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { message: "Please check the highlighted fields.", errors },
      { status: 400 },
    );
  }

  const forwardUrl = process.env.CONTACT_FORWARD_URL?.trim();
  if (!forwardUrl) {
    return NextResponse.json(
      {
        message:
          "The contact form isn't connected to an inbox yet. Please try again shortly — we're sorry for the detour.",
      },
      { status: 503 },
    );
  }

  const payload = {
    name: body.name!.trim(),
    email: body.email!.trim(),
    subject: body.subject!.trim(),
    message: body.message!.trim(),
    receivedAt: new Date().toISOString(),
    source: "suhonlabs.com/contact",
  };

  try {
    const token = process.env.CONTACT_FORWARD_TOKEN?.trim();
    const response = await fetch(forwardUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("Contact forward failed", response.status);
      return NextResponse.json(
        { message: "We couldn't deliver your message just now. Please try again in a moment." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Contact forward error", error);
    return NextResponse.json(
      { message: "We couldn't deliver your message just now. Please try again in a moment." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Thanks — your message is on its way. We'll be in touch.",
  });
}
