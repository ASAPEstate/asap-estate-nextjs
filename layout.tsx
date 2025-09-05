// app/contact/layout.tsx  (Server Component — ไม่มี "use client")
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | ASAP Estate",
  description:
    "ติดต่อทีมที่ปรึกษาอสังหาฯ ASAP Estate — ฟรีค่าปรึกษา ดูแลครบจนถึงวันโอนกรรมสิทธิ์",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ไม่ต้องใส่อะไรเพิ่มก็ได้ แค่คืน children
  return <>{children}</>;
}
