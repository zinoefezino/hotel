import { useState, type SubmitEvent } from "react";
import Button from "./Button";

type Draft = { name: string; email: string; topic: string; message: string };
const inputStyle = "mt-2 min-h-12 w-full rounded-sm border border-forest/20 bg-white px-4 py-3 text-sm";
const topics = ["Planning a stay", "Dining", "Wellness", "Local experiences", "Accessibility", "Something else"];

export default function EnquiryForm({ initialTopic = "Planning a stay", initialMessage = "" }: { initialTopic?: string; initialMessage?: string }) {
  const [draft, setDraft] = useState<Draft | null>(null);
  const [error, setError] = useState("");
  function preview(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = { name: String(data.get("name") ?? "").trim(), email: String(data.get("email") ?? "").trim(), topic: String(data.get("topic") ?? ""), message: String(data.get("message") ?? "").trim() };
    if (!values.name || values.message.length < 10) { setError("Add your name and a message of at least 10 characters."); return; }
    setError(""); setDraft(values);
  }
  return <div>
    <h2 className="text-4xl tracking-tight">Let's plan something lovely.</h2>
    <p id="enquiry-note" className="mt-4 mb-7 max-w-xl text-sm leading-7 text-muted">Try the enquiry form. This demo previews your message locally; it does not send an email or store your details.</p>
    <form aria-label="Enquiry preview" aria-describedby="enquiry-note" onSubmit={preview} onInput={() => { setDraft(null); setError(""); }} className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm">Your name<input required name="name" autoComplete="name" maxLength={100} className={inputStyle} /></label>
      <label className="text-sm">Email address<input required type="email" name="email" autoComplete="email" maxLength={200} className={inputStyle} /></label>
      <label className="text-sm sm:col-span-2">How can we help?<select name="topic" defaultValue={topics.includes(initialTopic) ? initialTopic : topics[0]} className={inputStyle}>{topics.map(topic => <option key={topic}>{topic}</option>)}</select></label>
      <label className="text-sm sm:col-span-2">Your message<textarea name="message" required minLength={10} maxLength={3000} defaultValue={initialMessage} rows={5} className={inputStyle} /></label>
      <div className="sm:col-span-2"><Button type="submit">Preview enquiry</Button></div>
    </form>
    {error && <p role="alert" className="mt-4 text-sm text-red-700">{error}</p>}
    {draft && <div role="status" className="mt-7 rounded-sm bg-sage p-6"><h3 className="text-2xl tracking-tight">Your enquiry preview</h3><p className="mt-2 text-sm">Nothing has been sent.</p><dl className="mt-5 grid gap-3 break-words text-sm"><div><dt className="text-muted">From</dt><dd>{draft.name} · {draft.email}</dd></div><div><dt className="text-muted">Topic</dt><dd>{draft.topic}</dd></div><div><dt className="text-muted">Message</dt><dd className="mt-1 whitespace-pre-wrap leading-6">{draft.message}</dd></div></dl></div>}
  </div>;
}

