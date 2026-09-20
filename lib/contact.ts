/** Shared validation so the client and the API route agree on the rules. */

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

export const limits = {
  name: 120,
  email: 200,
  subject: 160,
  message: 4000,
} as const;

// Deliberately permissive: enough to catch a typo, not enough to reject a
// valid address we haven't thought of.
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: Partial<ContactPayload>): ContactErrors {
  const errors: ContactErrors = {};
  const name = input.name?.trim() ?? "";
  const email = input.email?.trim() ?? "";
  const subject = input.subject?.trim() ?? "";
  const message = input.message?.trim() ?? "";

  if (!name) errors.name = "Please tell us your name.";
  else if (name.length > limits.name) errors.name = `Please keep this under ${limits.name} characters.`;

  if (!email) errors.email = "We need an email address to reply to.";
  else if (!emailPattern.test(email)) errors.email = "That doesn't look like an email address.";
  else if (email.length > limits.email) errors.email = `Please keep this under ${limits.email} characters.`;

  if (!subject) errors.subject = "A short subject helps us route your message.";
  else if (subject.length > limits.subject)
    errors.subject = `Please keep this under ${limits.subject} characters.`;

  if (!message) errors.message = "Please add a message.";
  else if (message.length < 10) errors.message = "A little more detail would help.";
  else if (message.length > limits.message)
    errors.message = `Please keep this under ${limits.message} characters.`;

  return errors;
}
