// app/api/feedback/route.ts
//
// Airtable table name: "feedback"
// Fields required (case-sensitive):
//   Company          → Single line text
//   Email            → Email
//   Services         → Long text  (comma-joined list)
//   QualityRating    → Number
//   TimelinessRating → Number
//   CommRating       → Number
//   ValueRating      → Number
//   OverallRating    → Number  (mean of the four above)
//   Message          → Long text
//
// r.createdTime is used for date — no extra field needed.

import { NextResponse } from "next/server";

const BASE = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/feedback`;
const AUTH = { Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}` };

/* ── GET — latest 5 entries ──────────────────────────────── */
export async function GET() {
  try {
    const qs = new URLSearchParams();
    qs.set("maxRecords", "20");
    qs.append("fields[]", "Company");
    qs.append("fields[]", "Services");
    qs.append("fields[]", "QualityRating");
    qs.append("fields[]", "TimelinessRating");
    qs.append("fields[]", "CommRating");
    qs.append("fields[]", "ValueRating");
    qs.append("fields[]", "OverallRating");
    qs.append("fields[]", "Message");

    const res = await fetch(`${BASE}?${qs}`, {
      headers: AUTH,
      cache: "no-store",
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error?.message ?? `Airtable ${res.status}`);
    }

    const data = await res.json();

    const records = (data.records ?? []).map((r: any) => ({
      id:               r.id,
      company:          (r.fields.Company ?? "Anonymous").trim(),
      services:         r.fields.Services ?? "",
      qualityRating:    Number(r.fields.QualityRating    ?? 0),
      timelinessRating: Number(r.fields.TimelinessRating ?? 0),
      commRating:       Number(r.fields.CommRating       ?? 0),
      valueRating:      Number(r.fields.ValueRating      ?? 0),
      overallRating:    Number(r.fields.OverallRating    ?? 0),
      message:          (r.fields.Message ?? "").trim(),
      created:          r.createdTime ?? "",
    }));

    records.sort(
      (a: any, b: any) =>
        new Date(b.created).getTime() - new Date(a.created).getTime()
    );

    return NextResponse.json({ testimonials: records.slice(0, 5) });
  } catch (err: any) {
    console.error("GET /api/feedback error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

/* ── POST — submit new feedback ──────────────────────────── */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      company, email, services,
      qualityRating, timelinessRating, commRating, valueRating,
      message,
    } = body;

    const errors: Record<string, string> = {};
    if (!company?.trim())
      errors.company = "Company name is required.";
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "A valid email is required.";
    if (!services?.length)
      errors.services = "Please select at least one service.";
    if (!qualityRating || qualityRating < 1 || qualityRating > 5)
      errors.qualityRating = "Please rate quality.";
    if (!timelinessRating || timelinessRating < 1 || timelinessRating > 5)
      errors.timelinessRating = "Please rate timeliness.";
    if (!commRating || commRating < 1 || commRating > 5)
      errors.commRating = "Please rate communication.";
    if (!valueRating || valueRating < 1 || valueRating > 5)
      errors.valueRating = "Please rate value.";
    if (!message?.trim() || message.trim().length < 10)
      errors.message = "Please write at least 10 characters.";

    if (Object.keys(errors).length)
      return NextResponse.json({ errors }, { status: 400 });

    const overallRating = parseFloat(
      ((qualityRating + timelinessRating + commRating + valueRating) / 4).toFixed(2)
    );

    const res = await fetch(BASE, {
      method: "POST",
      headers: { ...AUTH, "Content-Type": "application/json" },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Company:          company.trim(),
              Email:            email.trim().toLowerCase(),
              Services:         Array.isArray(services) ? services.join(", ") : services,
              QualityRating:    qualityRating,
              TimelinessRating: timelinessRating,
              CommRating:       commRating,
              ValueRating:      valueRating,
              OverallRating:    overallRating,
              Message:          message.trim(),
            },
          },
        ],
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error?.message ?? `Airtable ${res.status}`);
    }

    return NextResponse.json({ success: true, overallRating });
  } catch (err: any) {
    console.error("POST /api/feedback error:", err.message);
    return NextResponse.json(
      { error: err.message ?? "Something went wrong." },
      { status: 500 }
    );
  }
}
