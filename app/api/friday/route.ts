// app/api/friday/route.ts
//
// GET  — fetch the upcoming session config (topic, time, description)
// POST — increment the join-click counter for the upcoming session
//
// Airtable table name: "friday_sessions"  (create this in your Feedback base)
// Fields required:
//   Topic        → Single line text   (e.g. "AI Consciousness & Free Will")
//   SessionTime  → Single line text   (e.g. "2026-05-16T15:00:00")  — ISO datetime string
//   Description  → Long text          (optional override of default body copy)
//   JoinClicks   → Number             (starts at 0, we increment on each click)
//   Active       → Checkbox           (tick the ONE row that is the upcoming session)
//
// Only ONE row should have Active = true at any time.
// After each session, untick that row and tick the next one.

import { NextResponse } from "next/server";

const BASE = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/friday_sessions`;
const AUTH = { Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}` };

/* ── GET — fetch active session ──────────────────────────── */
export async function GET() {
  try {
    const qs = new URLSearchParams();
    qs.set("filterByFormula", "{Active}=1");
    qs.set("maxRecords", "1");
    qs.append("fields[]", "Topic");
    qs.append("fields[]", "SessionTime");
    qs.append("fields[]", "Description");
    qs.append("fields[]", "JoinClicks");

    const res = await fetch(`${BASE}?${qs}`, {
      headers: AUTH,
      cache: "no-store",
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error?.message ?? `Airtable ${res.status}`);
    }

    const data = await res.json();
    const record = data.records?.[0];

    if (!record) {
      // No active session configured — return sensible defaults
      return NextResponse.json({
        session: {
          id: null,
          topic: "Tech-for-People",
          sessionTime: null,
          description: null,
          joinClicks: 0,
        },
      });
    }

    return NextResponse.json({
      session: {
        id: record.id,
        topic: record.fields.Topic ?? "Tech-for-People",
        sessionTime: record.fields.SessionTime ?? null,
        description: record.fields.Description ?? null,
        joinClicks: Number(record.fields.JoinClicks ?? 0),
      },
    });
  } catch (err: any) {
    console.error("GET /api/friday error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

/* ── POST — increment join click count ───────────────────── */
export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "No session id provided." },
        { status: 400 }
      );
    }

    // First fetch the current count
    const fetchRes = await fetch(`${BASE}/${id}`, { headers: AUTH });
    if (!fetchRes.ok) {
      const err = await fetchRes.json().catch(() => ({}));
      throw new Error(err?.error?.message ?? `Airtable fetch ${fetchRes.status}`);
    }
    const record = await fetchRes.json();
    const current = Number(record.fields?.JoinClicks ?? 0);

    // Patch with incremented value
    const patchRes = await fetch(`${BASE}/${id}`, {
      method: "PATCH",
      headers: { ...AUTH, "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: { JoinClicks: current + 1 },
      }),
    });

    if (!patchRes.ok) {
      const err = await patchRes.json().catch(() => ({}));
      throw new Error(err?.error?.message ?? `Airtable patch ${patchRes.status}`);
    }

    return NextResponse.json({ joinClicks: current + 1 });
  } catch (err: any) {
    console.error("POST /api/friday error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
