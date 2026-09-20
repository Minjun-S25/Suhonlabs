"use client";

import { useId, useRef, useState } from "react";

import { limits, validateContact, type ContactErrors, type ContactPayload } from "@/lib/contact";
import styles from "./ContactForm.module.css";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

const empty: ContactPayload = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState<ContactPayload>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const formRef = useRef<HTMLFormElement>(null);

  const fieldId = (field: keyof ContactPayload) => `${id}-${field}`;
  const errorId = (field: keyof ContactPayload) => `${id}-${field}-error`;

  function update(field: keyof ContactPayload, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    // Clear a field's error as soon as the person starts fixing it.
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.kind === "sending") return;

    const nextErrors = validateContact(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({ kind: "idle" });
      const firstField = Object.keys(nextErrors)[0] as keyof ContactPayload;
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(fieldId(firstField))}`)?.focus();
      return;
    }

    setErrors({});
    setStatus({ kind: "sending" });

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          // Honeypot: real people leave this empty.
          company: String(formData.get("company") ?? ""),
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        message?: string;
        errors?: ContactErrors;
      };

      if (response.ok) {
        setValues(empty);
        setStatus({
          kind: "success",
          message: data.message ?? "Thanks — your message is on its way. We'll be in touch.",
        });
        return;
      }

      if (data.errors) setErrors(data.errors);
      setStatus({
        kind: "error",
        message: data.message ?? "Something went wrong. Please try again in a moment.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "We couldn't reach the server. Please check your connection and try again.",
      });
    }
  }

  const statusClass = [
    styles.status,
    status.kind === "error" ? styles.statusError : "",
    status.kind === "success" ? styles.statusSuccess : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit} noValidate>
      <Field
        label="Name"
        type="text"
        name="name"
        autoComplete="name"
        value={values.name}
        error={errors.name}
        maxLength={limits.name}
        id={fieldId("name")}
        errorId={errorId("name")}
        onChange={(value) => update("name", value)}
      />

      <Field
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        inputMode="email"
        value={values.email}
        error={errors.email}
        maxLength={limits.email}
        id={fieldId("email")}
        errorId={errorId("email")}
        onChange={(value) => update("email", value)}
      />

      <Field
        label="Subject"
        type="text"
        name="subject"
        value={values.subject}
        error={errors.subject}
        maxLength={limits.subject}
        id={fieldId("subject")}
        errorId={errorId("subject")}
        onChange={(value) => update("subject", value)}
      />

      <div className={styles.field}>
        <label className={styles.label} htmlFor={fieldId("message")}>
          Message
        </label>
        <textarea
          className={styles.textarea}
          id={fieldId("message")}
          name="message"
          required
          maxLength={limits.message}
          value={values.message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? errorId("message") : undefined}
          onChange={(event) => update("message", event.target.value)}
        />
        {errors.message ? (
          <p className={styles.error} id={errorId("message")}>
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor={`${id}-company`}>Company</label>
        <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={styles.actions}>
        <button
          className="button button--primary"
          type="submit"
          disabled={status.kind === "sending"}
        >
          {status.kind === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>

      <p className={statusClass} role="status" aria-live="polite">
        {status.kind === "success" || status.kind === "error" ? status.message : ""}
      </p>
    </form>
  );
}

type FieldProps = {
  label: string;
  type: string;
  name: string;
  id: string;
  errorId: string;
  value: string;
  error?: string;
  maxLength: number;
  autoComplete?: string;
  inputMode?: "email" | "text";
  onChange: (value: string) => void;
};

function Field({
  label,
  type,
  name,
  id,
  errorId,
  value,
  error,
  maxLength,
  autoComplete,
  inputMode,
  onChange,
}: FieldProps) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        name={name}
        type={type}
        required
        maxLength={maxLength}
        autoComplete={autoComplete}
        inputMode={inputMode}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? (
        <p className={styles.error} id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
