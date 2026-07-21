import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons.jsx";
import { SOCIALS } from "../data/socials.js";

// Fill these in from your EmailJS dashboard (emailjs.com) — free tier works fine.
const EMAILJS_SERVICE_ID = "service_2ixzpvo";
const EMAILJS_TEMPLATE_ID = "template_rtcf6bo";
const EMAILJS_PUBLIC_KEY = "mIA84ATRqa8ZadCaa";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID") {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative border-t border-[var(--color-border)] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="05 — CONTACT"
          title="Let's build something that gets released."
          description="Open to industrial attachment opportunities and freelance engagements across full-stack, IoT, and ML work."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${SOCIALS.email}`}
                className="glass-card flex items-center gap-3 rounded-xl p-4 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-green)]"
              >
                <Mail size={17} className="text-[var(--color-blue-soft)]" />
                {SOCIALS.email}
              </a>
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noreferrer"
                className="glass-card flex items-center gap-3 rounded-xl p-4 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-green)]"
              >
                <GithubIcon size={17} className="text-[var(--color-blue-soft)]" />
                github.com/ticharambwaanesu
              </a>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-card flex items-center gap-3 rounded-xl p-4 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-green)]"
              >
                <LinkedinIcon size={17} className="text-[var(--color-blue-soft)]" />
                linkedin.com/in/anesu-ticharambwa
              </a>
              <div className="glass-card flex items-center gap-3 rounded-xl p-4 text-sm text-[var(--color-text-muted)]">
                <MapPin size={17} className="text-[var(--color-blue-soft)]" />
                {SOCIALS.location}
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card flex flex-col gap-4 rounded-2xl p-6 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="user_name" className="font-mono text-[11px] tracking-wide text-[var(--color-text-dim)]">
                  NAME
                </label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  required
                  className="rounded-lg border border-[var(--color-border-strong)] bg-transparent px-3 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-blue)]"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="user_email" className="font-mono text-[11px] tracking-wide text-[var(--color-text-dim)]">
                  EMAIL
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                  className="rounded-lg border border-[var(--color-border-strong)] bg-transparent px-3 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-blue)]"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="font-mono text-[11px] tracking-wide text-[var(--color-text-dim)]">
                SUBJECT
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="rounded-lg border border-[var(--color-border-strong)] bg-transparent px-3 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-blue)]"
                placeholder="Industrial attachment / freelance / just saying hi"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-mono text-[11px] tracking-wide text-[var(--color-text-dim)]">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="resize-none rounded-lg border border-[var(--color-border-strong)] bg-transparent px-3 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-blue)]"
                placeholder="Tell me a bit about the role or project."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-green)] px-6 py-3 font-mono text-sm font-medium text-[#04120a] transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
              <Send size={15} />
            </button>

            {status === "success" && (
              <p className="font-mono text-xs text-[var(--color-green)]">
                Message sent — thanks, I'll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="font-mono text-xs text-[var(--color-amber)]">
                EmailJS isn't configured yet — add your Service ID, Template ID, and Public Key in
                Contact.jsx, or email me directly at {SOCIALS.email}.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
