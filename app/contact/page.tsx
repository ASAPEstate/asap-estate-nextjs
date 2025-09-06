import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | ASAP Estate",
  description: "ติดต่อที่ปรึกษาอสังหาริมทรัพย์ ASAP Estate — ปรึกษาฟรี",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold">ติดต่อเรา</h1>
      <p className="mt-2 text-gray-700">
        ปรึกษาเรื่องการฝากขาย–ปล่อยเช่า ประเมินราคา เคส NPL–NPA หรือขอคำแนะนำสินเชื่อ
        เราพร้อมช่วยคุณแบบครบวงจรจนจบวันโอนกรรมสิทธิ์
      </p>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="space-y-3 text-gray-800">
          <p><span className="font-medium">โทร:</span>{" "}
            <a href="tel:+6620000000" className="underline underline-offset-2">02-xxx-xxxx</a>
          </p>
          <p><span className="font-medium">อีเมล:</span>{" "}
            <a href="mailto:hello@asapestate.co.th" className="underline underline-offset-2">hello@asapestate.co.th</a>
          </p>
          <p><span className="font-medium">LINE Official:</span>{" "}
            <a className="text-emerald-700 underline underline-offset-2"
               href="https://line.me/R/ti/p/@your-line-id" target="_blank" rel="noopener noreferrer">
              @asapestate
            </a>
          </p>
          <p><span className="font-medium">ที่อยู่:</span> (ใส่ที่อยู่บริษัท)</p>

          <div className="rounded-2xl border bg-gray-50 p-4 text-sm">
            <p className="font-semibold">ฝากขาย/ปล่อยเช่า ด่วน</p>
            <p className="text-gray-600">ส่งรายละเอียดทรัพย์ + รูปภาพ ให้เราประเมินและวางแผนการตลาดให้ทันที</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
