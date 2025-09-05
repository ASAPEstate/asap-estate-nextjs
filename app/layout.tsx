// app/contact/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | ASAP Estate",
  description: "ติดต่อที่ปรึกษาอสังหาฯ ASAP Estate – ปรึกษาฟรี",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}