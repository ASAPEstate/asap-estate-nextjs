"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const d = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`ติดต่อจากเว็บไซต์: ${d.get("name") || ""}`);
    const body = encodeURIComponent(
      `ชื่อ: ${d.get("name") || ""}\nโทร: ${d.get("phone") || ""}\nอีเมล: ${
        d.get("email") || ""
      }\nข้อความ: ${d.get("message") || ""}`
    );

    window.location.href = `mailto:hello@asapestate.co.th?subject=${subject}&body=${body}`;
    setLoading(false);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <input name="name" placeholder="ชื่อ-นามสกุล" className="rounded-xl border p-3" required />
      <input name="phone" placeholder="โทรศัพท์" className="rounded-xl border p-3" inputMode="tel" />
      <input name="email" placeholder="อีเมล" type="email" className="rounded-xl border p-3" />
      <textarea name="message" rows={4} placeholder="รายละเอียดทรัพย์/ความต้องการ" className="rounded-xl border p-3" />
      <button type="submit" disabled={loading} className="rounded-xl bg-black px-5 py-3 text-white disabled:opacity-60">
        {loading ? "กำลังส่ง..." : "ส่งข้อความ (ปรึกษาฟรี)"}
      </button>
      <p className="text-xs text-gray-500">
        *ปุ่มนี้จะเปิดโปรแกรมอีเมลเพื่อส่งหาเรา — หากต้องการบันทึกลงฐานข้อมูลจริง แจ้งได้ เดี๋ยวผมเชื่อม Supabase ให้ครับ
      </p>
    </form>
  );
}
