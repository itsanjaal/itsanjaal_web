"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface EnrollModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  onSubmit: (data: { name: string; email: string; phone: string }) => void;
}

export default function EnrollModal({ open, setOpen, onSubmit }: EnrollModalProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = () => {
    onSubmit(form);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="rounded-xl p-6 max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Enroll For Free
          </DialogTitle>
        </DialogHeader>

        {/* Form Fields */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-2"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-2"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border rounded-lg px-4 py-2"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button className="bg-[#306998] text-white" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
