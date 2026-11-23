"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  MessageSquareText,
  MonitorPlay,
  Video,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { EnterpriseBrandMark } from "@/app/[lang]/(home)/_components/proof-section";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const BRAND = siteConfig.name;

interface MeetingType {
  id: "demo" | "pricing" | "enterprise" | "migration" | "custom";
  title: string;
  minutes: number;
  body: string;
  calendlyUrl: string;
}

const MEETING_TYPES: MeetingType[] = [
  {
    id: "demo",
    title: "Guided demo",
    minutes: 30,
    body: "A walkthrough of the products relevant to your project, and a look at your current setup.",
    calendlyUrl: "https://calendly.com/orderingteam/ordering-demo",
  },
  {
    id: "pricing",
    title: "Pricing",
    minutes: 30,
    body: "Which pricing path fits your operation, the products and integrations you need, and your questions.",
    calendlyUrl: "https://calendly.com/orderingteam/ordering-co-pricing",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    minutes: 45,
    body: "Your scale, requirements, products and integrations, for an enterprise operation.",
    calendlyUrl: "https://calendly.com/orderingteam/ordering-co-enterprise",
  },
  {
    id: "migration",
    title: "Migration planning",
    minutes: 45,
    body: "Your current platform, what needs to move, and the systems that must stay connected.",
    calendlyUrl: "https://calendly.com/orderingteam/ordering-co-migration-planning",
  },
  {
    id: "custom",
    title: "Custom project scoping",
    minutes: 45,
    body: "What you need built or changed, and the workflows and systems involved.",
    calendlyUrl: "https://calendly.com/orderingteam/ordering-co-custom-project",
  },
];

const TOPIC_HINTS: Record<string, string> = {
  "": "Include what you run today, and what you need next.",
  Sales: "Include your business, locations, and sales channels, and what you need next.",
  "Request a quote":
    "Include your operating model, approximate scale (locations, countries, or volume), and the channels or integrations that must keep working.",
  "Custom project":
    "Include what you need built or changed, the systems involved, your role, and how many locations or businesses it covers.",
  Migration:
    "Include your current platform, what needs to move, the systems that must stay connected, and how you will check the result. Do not include customer data, credentials, or exports.",
  "Request integration":
    "Include your POS or tool and its version, how many locations you run, and your country. We build the direct connection at no charge to you.",
  Support:
    "Include your brand or store, the order or channel affected, the approximate time, and the error you saw.",
  Partnerships: "Include your company and the partnership you have in mind.",
  Press: "Include your publication and what you are working on.",
  Other: "Include what you run today, and what you need next.",
};

const TOPIC_OPTIONS = [
  "Sales",
  "Request a quote",
  "Custom project",
  "Migration",
  "Request integration",
  "Support",
  "Partnerships",
  "Press",
  "Other",
];

const CUSTOMER_BRANDS = [
  "Domino's",
  "Burger King",
  "Starbucks",
  "KFC",
  "P.F. Chang's",
  "Chili's",
  "Vips",
  "Pizza Hut",
];

const TIME_SLOTS = ["09:00 AM", "10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM", "05:00 PM"];

const BEFORE_YOU_WRITE_CARDS = [
  {
    num: "01",
    title: "See it running",
    body: "A live demo of the storefront, apps, kiosk and the merchant tools behind them.",
    href: "/demo",
  },
  {
    num: "02",
    title: "Pricing",
    body: "What a plan includes and how it scales as you add locations and channels.",
    href: "/pricing",
  },
  {
    num: "03",
    title: "Developer questions",
    body: "API reference, SDKs, webhooks and the sandbox, before you talk to anyone.",
    href: "/developers",
  },
  {
    num: "04",
    title: "Coming from another platform",
    body: "How a migration runs, what moves with you, and how long it takes.",
    href: "/#migration",
  },
];

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay(); // 0 = Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return { firstDay, daysInMonth };
}

export function ContactPageView() {
  // Meeting picker state
  const [selectedMeetingId, setSelectedMeetingId] = useState<MeetingType["id"]>("demo");
  const [calendarMonthOffset, setCalendarMonthOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingSubmitting, setBookingSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<{ requestId: string; summary: string } | null>(null);

  // Contact form state
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccessId, setFormSuccessId] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const m = params.get("meeting");
    if (m === "demo" || m === "pricing" || m === "enterprise" || m === "migration" || m === "custom") {
      setSelectedMeetingId(m);
    }
    const t = params.get("topic");
    if (t && TOPIC_OPTIONS.includes(t)) {
      setTopic(t);
    }
  }, []);

  const activeMeeting = MEETING_TYPES.find((m) => m.id === selectedMeetingId) ?? MEETING_TYPES[0];

  // Build interactive calendar month
  const now = new Date();
  const viewDate = new Date(now.getFullYear(), now.getMonth() + calendarMonthOffset, 1);
  const viewYear = viewDate.getFullYear();
  const viewMonth = viewDate.getMonth();
  const monthLabel = viewDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const { firstDay, daysInMonth } = getMonthDays(viewYear, viewMonth);

  const isDaySelectable = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    const dow = d.getDay();
    if (dow === 0 || dow === 6) return false; // Mon-Fri
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return d >= todayStart;
  };

  const handleConfirmMeeting = async (e: FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot || !bookingName.trim() || !bookingEmail.trim()) return;
    setBookingSubmitting(true);
    try {
      const dateStr = new Date(viewYear, viewMonth, selectedDate).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: bookingName.trim(),
          email: bookingEmail.trim(),
          company: activeMeeting.title,
          notes: `Meeting: ${activeMeeting.title} (${activeMeeting.minutes} min) on ${dateStr} at ${selectedSlot} (Google Meet)`,
          source: `contact-meeting:${activeMeeting.id}`,
        }),
      });
      const data = (await res.json()) as { ok?: boolean; requestId?: string };
      setBookingConfirmed({
        requestId: data.requestId || `MEET-${Date.now().toString(36).toUpperCase()}`,
        summary: `${activeMeeting.title} (${activeMeeting.minutes} min) · ${dateStr} at ${selectedSlot}`,
      });
    } finally {
      setBookingSubmitting(false);
    }
  };

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!topic) nextErrors.topic = "This field is required.";
    if (!name.trim()) nextErrors.name = "This field is required.";
    if (!email.trim()) nextErrors.email = "This field is required.";
    else if (!emailRe.test(email.trim())) nextErrors.email = "Enter a valid email address.";
    if (!message.trim()) nextErrors.message = "This field is required.";

    setErrors(nextErrors);
    const errorCount = Object.keys(nextErrors).length;
    if (errorCount > 0) {
      setFormStatus(errorCount === 1 ? "Correct the highlighted field." : "Correct the highlighted fields.");
      return;
    }

    setFormStatus(null);
    setFormSubmitting(true);
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: name.trim(),
          email: email.trim(),
          company: company.trim() || topic,
          businessType: topic,
          notes: message.trim(),
          source: "contact-form",
        }),
      });
      const data = (await res.json()) as { ok?: boolean; requestId?: string };
      if (data.ok) {
        setFormSuccessId(data.requestId || `MSG-${Date.now().toString(36).toUpperCase()}`);
        setFormStatus("Your message has been routed to the team. You'll receive an email confirming receipt.");
      } else {
        setFormStatus("Unable to submit right now. Please try again.");
      }
    } catch {
      setFormStatus("Unable to submit right now. Please try again.");
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. LIGHT HERO + 3-ROW QUICK-ACTION CARD */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Copy */}
            <div className="lg:col-span-7">
              <p className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">
                Company · Contact
              </p>

              <h1 className="mt-4 text-[44px] sm:text-[58px] lg:text-[64px] font-bold tracking-[-0.045em] leading-[1.02] text-[var(--od-text)]">
                Let&apos;s talk about your business.
              </h1>

              <p className="mt-5 max-w-xl text-[17px] sm:text-[18.5px] leading-[1.6] text-[var(--od-text-muted)]">
                Book time with our team, or tell us what you need. Choose a topic, send your message, and our team will
                reply by email.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#book"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1]"
                >
                  Book a meeting
                </a>
                <a
                  href="#form"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-5 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                >
                  Send a message
                </a>
              </div>

              <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[12px] text-[var(--od-text-muted)]">
                {["Sales, support and partnerships", "One form, routed by topic", "Answered by email"].map((item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#266df0]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right 3-Row Quick Action Card */}
            <nav
              aria-label="Ways to reach us"
              className="lg:col-span-5 overflow-hidden rounded-[12px] border border-[var(--od-border)] bg-[var(--od-bg)] divide-y divide-[var(--od-border)]"
            >
              <a
                href="#book"
                className="group flex items-start gap-4 p-6 transition-colors hover:bg-[var(--od-surface-subtle)]"
              >
                <CalendarClock className="mt-0.5 h-5 w-5 shrink-0 text-[#266df0]" strokeWidth={1.75} />
                <span className="flex-1">
                  <strong className="block text-[15.5px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)]">
                    Book a meeting
                  </strong>
                  <span className="mt-1 block text-[13.5px] leading-[1.55] text-[var(--od-text-muted)]">
                    A guided demo, pricing, enterprise, migration or a custom project. 30 or 45 minutes.
                  </span>
                </span>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[var(--od-text-muted)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--od-action-content)]" />
              </a>

              <a
                href="#form"
                className="group flex items-start gap-4 p-6 transition-colors hover:bg-[var(--od-surface-subtle)]"
              >
                <MessageSquareText className="mt-0.5 h-5 w-5 shrink-0 text-[#266df0]" strokeWidth={1.75} />
                <span className="flex-1">
                  <strong className="block text-[15.5px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)]">
                    Send a message
                  </strong>
                  <span className="mt-1 block text-[13.5px] leading-[1.55] text-[var(--od-text-muted)]">
                    One form for sales, support, partnerships and press. Answered by email.
                  </span>
                </span>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[var(--od-text-muted)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--od-action-content)]" />
              </a>

              <Link
                href="/demo"
                className="group flex items-start gap-4 p-6 transition-colors hover:bg-[var(--od-surface-subtle)]"
              >
                <MonitorPlay className="mt-0.5 h-5 w-5 shrink-0 text-[#266df0]" strokeWidth={1.75} />
                <span className="flex-1">
                  <strong className="block text-[15.5px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)]">
                    See a live demo
                  </strong>
                  <span className="mt-1 block text-[13.5px] leading-[1.55] text-[var(--od-text-muted)]">
                    Explore the storefront and apps on your own before you talk to anyone.
                  </span>
                </span>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[var(--od-text-muted)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--od-action-content)]" />
              </Link>
            </nav>
          </div>
        </Container>
      </section>

      {/* 2. CUSTOMER PROOF STRIP */}
      <div className="border-y border-[var(--od-border)] bg-white py-10">
        <Container>
          <p className="text-center text-[13.5px] text-[#5b5e64]">
            Restaurants, franchises, and marketplaces already run their ordering on {BRAND}.
          </p>
          <ul
            aria-label="Customers"
            className="mt-7 grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-6 sm:grid-cols-4 lg:grid-cols-8"
          >
            {CUSTOMER_BRANDS.map((brand) => (
              <li key={brand} className="scale-[0.74] origin-center">
                <Link href="/#customers" className="inline-flex items-center justify-center hover:opacity-80">
                  <EnterpriseBrandMark brand={brand} />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      {/* 3. #book — PICK THE CONVERSATION, THEN THE TIME */}
      <section id="book" className="scroll-mt-24 py-16 lg:py-20">
        <Container>
          <p className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">Book a meeting</p>
          <div className="mt-2.5 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="lg:col-span-7 text-[36px] sm:text-[48px] font-bold tracking-[-0.04em] leading-[1.05] text-[var(--od-text)]">
              Pick the conversation,
              <br />
              then the time.
            </h2>
            <p className="lg:col-span-5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
              Each meeting has its own agenda, so the team arrives ready for your question. Choose one, and the calendar
              shows the times available. Every meeting runs on Google Meet.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
            {/* Left Stack: 5 Meeting Types */}
            <fieldset className="lg:col-span-4 space-y-3">
              <legend className="sr-only">Meeting type</legend>
              {MEETING_TYPES.map((m) => {
                const active = m.id === selectedMeetingId;
                return (
                  <label
                    key={m.id}
                    className={cn(
                      "block cursor-pointer rounded-[10px] border p-5 transition-colors",
                      active
                        ? "border-[#266df0] bg-[var(--od-action-soft)]/55 ring-1 ring-[#266df0]/25"
                        : "border-[var(--od-border)] bg-[var(--od-bg)] hover:border-[var(--od-border-strong)]"
                    )}
                  >
                    <input
                      type="radio"
                      name="meeting"
                      value={m.id}
                      checked={active}
                      onChange={() => {
                        setSelectedMeetingId(m.id);
                        setBookingConfirmed(null);
                      }}
                      className="sr-only"
                    />
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-[15.5px] font-bold text-[var(--od-text)]">{m.title}</span>
                      <span className="font-mono text-[12px] text-[var(--od-text-muted)]">{m.minutes} min</span>
                    </span>
                    <span className="mt-1.5 block text-[13.5px] leading-[1.55] text-[var(--od-text-muted)]">
                      {m.body}
                    </span>
                  </label>
                );
              })}
            </fieldset>

            {/* Right Panel: Interactive Date & Time Scheduler + Open in Calendly */}
            <div className="lg:col-span-8 rounded-[12px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[var(--od-border)] pb-5">
                <div>
                  <h3 className="text-[22px] font-bold text-[var(--od-text)]">{activeMeeting.title}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-4 font-mono text-[12.5px] text-[var(--od-text-muted)]">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {activeMeeting.minutes} min
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Video className="h-3.5 w-3.5" />
                      Google Meet
                    </span>
                  </div>
                </div>

                <a
                  href={activeMeeting.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-[var(--od-action-content)] underline underline-offset-4 hover:opacity-80"
                >
                  <span>Open in Calendly</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              {bookingConfirmed ? (
                <div className="mt-8 rounded-[10px] border border-[#16a34a]/30 bg-[#16a34a]/10 p-6 text-center">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-[#16a34a]" />
                  <h4 className="mt-3 text-[20px] font-bold text-[var(--od-text)]">Meeting requested</h4>
                  <p className="mt-1.5 text-[14.5px] text-[var(--od-text-muted)]">{bookingConfirmed.summary}</p>
                  <p className="mt-2 font-mono text-[12px] text-[var(--od-action-content)]">
                    Reference: {bookingConfirmed.requestId}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setBookingConfirmed(null);
                      setSelectedSlot(null);
                    }}
                    className="mt-5 inline-flex items-center justify-center rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2 text-[13.5px] font-semibold text-[var(--od-text)] hover:bg-[var(--od-surface-subtle)] cursor-pointer"
                  >
                    Choose another time
                  </button>
                </div>
              ) : (
                <div className="mt-6">
                  <p className="text-[14.5px] text-[var(--od-text-muted)]">Choose a date and time below.</p>

                  <div className="mt-5 rounded-[10px] border border-[var(--od-border)] border-t-4 border-t-[#266df0] bg-[var(--od-bg)] p-5 sm:p-6">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                      {/* Calendar Grid */}
                      <div className="md:col-span-7">
                        <div className="flex items-center justify-between">
                          <button
                            type="button"
                            disabled={calendarMonthOffset <= 0}
                            onClick={() => {
                              setCalendarMonthOffset((o) => Math.max(0, o - 1));
                              setSelectedDate(null);
                              setSelectedSlot(null);
                            }}
                            aria-label="Previous month"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--od-border)] text-[var(--od-text)] disabled:opacity-35 cursor-pointer"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <p className="text-[15px] font-bold text-[var(--od-text)]">{monthLabel}</p>
                          <button
                            type="button"
                            disabled={calendarMonthOffset >= 3}
                            onClick={() => {
                              setCalendarMonthOffset((o) => Math.min(3, o + 1));
                              setSelectedDate(null);
                              setSelectedSlot(null);
                            }}
                            aria-label="Next month"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--od-border)] text-[var(--od-text)] disabled:opacity-35 cursor-pointer"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-4 grid grid-cols-7 gap-1 text-center font-mono text-[11px] uppercase text-[var(--od-text-muted)]">
                          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                            <span key={d} className="py-1">
                              {d}
                            </span>
                          ))}
                        </div>

                        <div className="mt-1 grid grid-cols-7 gap-1 text-center text-[13.5px]">
                          {Array.from({ length: firstDay }).map((_, idx) => (
                            <span key={`empty-${idx}`} />
                          ))}
                          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                            const selectable = isDaySelectable(day);
                            const isSelected = selectedDate === day;
                            return (
                              <button
                                key={day}
                                type="button"
                                disabled={!selectable}
                                onClick={() => {
                                  setSelectedDate(day);
                                  setSelectedSlot(null);
                                }}
                                className={cn(
                                  "h-9 w-full rounded-md font-medium transition-colors",
                                  !selectable && "text-[var(--od-text-muted)]/35 cursor-not-allowed",
                                  selectable &&
                                    !isSelected &&
                                    "bg-[var(--od-action-soft)]/50 text-[var(--od-action-content)] hover:bg-[#266df0] hover:text-white cursor-pointer",
                                  isSelected && "bg-[#266df0] text-white font-bold cursor-pointer"
                                )}
                              >
                                {day}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Time Slots + Quick Confirm */}
                      <div className="md:col-span-5 border-t border-[var(--od-border)] pt-5 md:border-t-0 md:border-l md:pl-6 md:pt-0">
                        <p className="text-[13.5px] font-bold text-[var(--od-text)]">
                          {selectedDate
                            ? new Date(viewYear, viewMonth, selectedDate).toLocaleDateString("en-US", {
                                weekday: "long",
                                month: "short",
                                day: "numeric",
                              })
                            : "Select a weekday"}
                        </p>

                        {!selectedDate ? (
                          <p className="mt-2 text-[13px] leading-[1.55] text-[var(--od-text-muted)]">
                            Pick any highlighted weekday on the calendar to view available Google Meet times.
                          </p>
                        ) : (
                          <div className="mt-3 space-y-2">
                            {TIME_SLOTS.map((slot) => {
                              const active = selectedSlot === slot;
                              return (
                                <button
                                  key={slot}
                                  type="button"
                                  onClick={() => setSelectedSlot(slot)}
                                  className={cn(
                                    "w-full rounded-[6px] border px-3 py-2 text-[13px] font-semibold transition-colors cursor-pointer",
                                    active
                                      ? "border-[#266df0] bg-[#266df0] text-white"
                                      : "border-[#266df0]/40 bg-[var(--od-bg)] text-[var(--od-action-content)] hover:border-[#266df0] hover:bg-[var(--od-action-soft)]/40"
                                  )}
                                >
                                  {slot}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>

                    {selectedDate && selectedSlot && (
                      <form
                        onSubmit={handleConfirmMeeting}
                        className="mt-6 grid grid-cols-1 gap-3 border-t border-[var(--od-border)] pt-5 sm:grid-cols-3"
                      >
                        <input
                          type="text"
                          required
                          value={bookingName}
                          onChange={(e) => setBookingName(e.target.value)}
                          placeholder="Your name"
                          className="h-[42px] rounded-[6px] border border-[var(--od-border-strong)] bg-[var(--od-bg)] px-3 text-[14px] text-[var(--od-text)] outline-none focus:border-[#266df0]"
                        />
                        <input
                          type="email"
                          required
                          value={bookingEmail}
                          onChange={(e) => setBookingEmail(e.target.value)}
                          placeholder="you@brand.com"
                          className="h-[42px] rounded-[6px] border border-[var(--od-border-strong)] bg-[var(--od-bg)] px-3 text-[14px] text-[var(--od-text)] outline-none focus:border-[#266df0]"
                        />
                        <button
                          type="submit"
                          disabled={bookingSubmitting}
                          className="h-[42px] rounded-[6px] bg-[#266df0] px-4 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1] disabled:opacity-60 cursor-pointer"
                        >
                          {bookingSubmitting ? "Confirming..." : `Confirm ${selectedSlot}`}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. #form — ONE FORM. PICK THE TOPIC. */}
      <section id="form" className="scroll-mt-24 py-10 sm:py-16">
        <Container>
          <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-bg)] p-7 sm:p-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Left Copy */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <p className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">Send a message</p>
                <h2 className="mt-2.5 text-[36px] sm:text-[42px] font-bold tracking-[-0.04em] leading-[1.06] text-[var(--od-text)]">
                  One form.
                  <br />
                  Pick the topic.
                </h2>
                <p className="mt-4 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
                  Choose a topic and include what it asks for, so the team that handles it can reply with specifics.
                </p>

                <div className="mt-8 border-t border-[var(--od-border)] pt-6">
                  <h3 className="text-[14.5px] font-bold text-[var(--od-text)]">What happens next</h3>
                  <ol className="mt-3 list-decimal space-y-2 pl-4 text-[14px] leading-[1.55] text-[var(--od-text-muted)]">
                    <li>Your message goes to the team that handles your topic.</li>
                    <li>The reply comes by email.</li>
                  </ol>

                  <a
                    href="#book"
                    className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] underline underline-offset-4 hover:opacity-80"
                  >
                    <span>Prefer to talk it through? Book a meeting</span>
                    <ArrowUp className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-8">
              {formSuccessId ? (
                <div className="rounded-[10px] border border-[#16a34a]/30 bg-[#16a34a]/10 p-8 text-center">
                  <CheckCircle2 className="mx-auto h-11 w-11 text-[#16a34a]" />
                  <h3 className="mt-3 text-[22px] font-bold text-[var(--od-text)]">Message received</h3>
                  <p className="mt-2 text-[15px] text-[var(--od-text-muted)]">
                    Your <strong className="text-[var(--od-text)]">{topic}</strong> inquiry has been routed to our team.
                    You&apos;ll receive an email confirming receipt of your message.
                  </p>
                  <p className="mt-2 font-mono text-[12px] text-[var(--od-action-content)]">
                    Reference: {formSuccessId}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSuccessId(null);
                      setTopic("");
                      setName("");
                      setCompany("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="mt-6 inline-flex rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2 text-[13.5px] font-semibold text-[var(--od-text)] hover:bg-[var(--od-surface-subtle)] cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Topic */}
                    <div>
                      <label htmlFor="contact-topic" className="block text-[13.5px] font-bold text-[var(--od-text)]">
                        Topic
                      </label>
                      <select
                        id="contact-topic"
                        name="topic"
                        required
                        value={topic}
                        onChange={(e) => {
                          setTopic(e.target.value);
                          setErrors((p) => ({ ...p, topic: "" }));
                        }}
                        aria-invalid={!!errors.topic}
                        className={cn(
                          "mt-1.5 h-[44px] w-full rounded-[6px] border bg-[var(--od-bg)] px-3 text-[14.5px] text-[var(--od-text)] outline-none focus:border-[#266df0]",
                          errors.topic ? "border-red-500" : "border-[var(--od-border-strong)]"
                        )}
                      >
                        <option value="">Choose a topic</option>
                        {TOPIC_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.topic && <p className="mt-1 text-[12.5px] text-red-600">{errors.topic}</p>}
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-[13.5px] font-bold text-[var(--od-text)]">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        maxLength={120}
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          setErrors((p) => ({ ...p, name: "" }));
                        }}
                        aria-invalid={!!errors.name}
                        className={cn(
                          "mt-1.5 h-[44px] w-full rounded-[6px] border bg-[var(--od-bg)] px-3 text-[14.5px] text-[var(--od-text)] outline-none focus:border-[#266df0]",
                          errors.name ? "border-red-500" : "border-[var(--od-border-strong)]"
                        )}
                      />
                      {errors.name && <p className="mt-1 text-[12.5px] text-red-600">{errors.name}</p>}
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="contact-company" className="block text-[13.5px] font-bold text-[var(--od-text)]">
                        Company (optional)
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        maxLength={200}
                        placeholder="Brand or company name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="mt-1.5 h-[44px] w-full rounded-[6px] border border-[var(--od-border-strong)] bg-[var(--od-bg)] px-3 text-[14.5px] text-[var(--od-text)] outline-none focus:border-[#266df0]"
                      />
                    </div>

                    {/* Work email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-[13.5px] font-bold text-[var(--od-text)]">
                        Work email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        maxLength={254}
                        placeholder="you@brand.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrors((p) => ({ ...p, email: "" }));
                        }}
                        aria-invalid={!!errors.email}
                        className={cn(
                          "mt-1.5 h-[44px] w-full rounded-[6px] border bg-[var(--od-bg)] px-3 text-[14.5px] text-[var(--od-text)] outline-none focus:border-[#266df0]",
                          errors.email ? "border-red-500" : "border-[var(--od-border-strong)]"
                        )}
                      />
                      {errors.email && <p className="mt-1 text-[12.5px] text-red-600">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-[13.5px] font-bold text-[var(--od-text)]">
                      Message
                    </label>
                    <p className="mt-1 text-[13px] text-[var(--od-text-muted)]">
                      {TOPIC_HINTS[topic] || TOPIC_HINTS[""]}
                    </p>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      maxLength={5000}
                      placeholder="Tell us about your operation and what you need."
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        setErrors((p) => ({ ...p, message: "" }));
                      }}
                      aria-invalid={!!errors.message}
                      className={cn(
                        "mt-2 w-full rounded-[6px] border bg-[var(--od-bg)] p-3 text-[14.5px] text-[var(--od-text)] outline-none focus:border-[#266df0]",
                        errors.message ? "border-red-500" : "border-[var(--od-border-strong)]"
                      )}
                    />
                    {errors.message && <p className="mt-1 text-[12.5px] text-red-600">{errors.message}</p>}
                  </div>

                  <p className="text-[12.5px] text-[var(--od-text-muted)]">
                    We use your details to respond to your message. This does not subscribe you to marketing emails.
                  </p>

                  {formStatus && (
                    <p role="alert" className="text-[13.5px] font-medium text-red-600">
                      {formStatus}
                    </p>
                  )}

                  <div>
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="flex min-h-[48px] w-full items-center justify-center rounded-[6px] bg-[#266df0] px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#1f5fd1] disabled:opacity-60 cursor-pointer"
                    >
                      {formSubmitting ? "Sending..." : "Send message"}
                    </button>
                    <p className="mt-2.5 text-center text-[12.5px] text-[var(--od-text-muted)]">
                      You&apos;ll receive an email confirming receipt of your message.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. #support — THREE WAYS TO REACH US */}
      <section id="support" className="scroll-mt-24 py-14 sm:py-16">
        <Container>
          <p className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">Where to start</p>
          <h2 className="mt-2.5 text-[30px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
            Three ways to reach us.
          </h2>

          <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-3">
            <article className="flex flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
              <div>
                <p className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">Sales</p>
                <h3 className="mt-2 text-[19px] font-bold text-[var(--od-text)]">Sales, pricing and quotes</h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                  Tell us about your locations, channels and integrations. Choose Sales or Request a quote in the form.
                  If you want to see the platform first, start with a live demo.
                </p>
              </div>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--od-border)] pt-4 text-[13.5px] font-semibold text-[var(--od-action-content)]">
                <li>
                  <a href="#book" className="inline-flex items-center gap-1 hover:underline">
                    Book a meeting <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
                <li>
                  <a href="#form" className="inline-flex items-center gap-1 hover:underline">
                    Go to the form <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              </ul>
            </article>

            <article className="flex flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
              <div>
                <p className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">Support</p>
                <h3 className="mt-2 text-[19px] font-bold text-[var(--od-text)]">
                  You&apos;re live and something needs an answer
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                  Start in the knowledge base: setup, configuration and day-to-day operations are documented there. If
                  the platform itself looks off, the status page shows the current state before you write.
                </p>
              </div>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--od-border)] pt-4 text-[13.5px] font-semibold text-[var(--od-action-content)]">
                <li>
                  <a
                    href="https://docs.ordering.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    Knowledge base <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
                <li>
                  <Link href="/api/health" className="inline-flex items-center gap-1 hover:underline">
                    Status page <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              </ul>
            </article>

            <article className="flex flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
              <div>
                <p className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">Partnerships</p>
                <h3 className="mt-2 text-[19px] font-bold text-[var(--od-text)]">
                  Agencies, resellers and technology partners
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                  Build on {BRAND} for your clients, resell it under your own brand, or connect your product to the
                  platform. The partner program covers how each one works.
                </p>
              </div>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--od-border)] pt-4 text-[13.5px] font-semibold text-[var(--od-action-content)]">
                <li>
                  <Link href="/solutions/agencies-resellers" className="inline-flex items-center gap-1 hover:underline">
                    Partner program <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              </ul>
            </article>
          </div>
        </Container>
      </section>

      {/* 6. #before-you-write — SOME OF IT IS ALREADY ON THE SITE */}
      <section id="before-you-write" className="scroll-mt-24 border-t border-[var(--od-border)] py-14 sm:py-16">
        <Container>
          <p className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">Before you write</p>
          <div className="mt-2.5 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end">
            <h2 className="lg:col-span-7 text-[30px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
              Some of it is already on the site.
            </h2>
            <p className="lg:col-span-5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
              If your question is one of these, the page answers faster than we can.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BEFORE_YOU_WRITE_CARDS.map((card) => (
              <Link
                key={card.num}
                href={card.href}
                className="group flex flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
              >
                <div>
                  <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">
                    {card.num}
                  </span>
                  <h3 className="mt-2 text-[18px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[var(--od-text-muted)]">{card.body}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-[13.5px] font-semibold text-[var(--od-action-content)]">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. CLOSING DARK CTA BAND */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-[10px] bg-[#0b0c0d] px-7 py-14 sm:px-14 sm:py-[72px] flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/2 h-[634px] w-[696px] -translate-y-1/2"
              style={{
                background: "radial-gradient(closest-side, rgba(38, 109, 240, 0.28), transparent)",
              }}
            />

            <div className="relative z-10 max-w-xl">
              <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.06] text-white">
                Or see it with your own menu.
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-[#c4c6ca]">
                A live demo of the platform, or the pricing page if that&apos;s the question you came with.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <Link
                href="/demo"
                className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1]"
              >
                See a live demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] border border-[#34363a] bg-[#17181a] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#5b5e64] hover:bg-[#212224]"
              >
                See pricing
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
