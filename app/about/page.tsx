// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | ASAP Estate",
  description:
    "ที่ปรึกษาและนายหน้าฯ โดย ASAP Estate ซื่อสัตย์ โปร่งใส ทํางานไว และสื่อสารชัดเจน",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold">เกี่ยวกับ ASAP Estate</h1>
      <p className="mt-3 text-gray-700">
        เราคือทีม <strong>นายหน้าและที่ปรึกษาอสังหาริมทรัพย์</strong>{" "}
        ให้บริการรับขายฝาก ฝากขาย–เช่า บ้าน คอนโด ที่ดิน และอสังหาริมทรัพย์เชิงพาณิชย์
        เชี่ยวชาญเคส <strong>NPL–NPA</strong> ประเมินและเทียบราคาตลาด
        ให้คำปรึกษาเรื่องสินเชื่อ <strong>ฟรี</strong> ดูแลครบทุกขั้นตอน
        ตั้งแต่รับฝาก–ทำการตลาด–พาชมทรัพย์–เจรจาต่อรอง–เอกสาร–จนจบวันโอนกรรมสิทธิ์
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">บริการของเรา</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-gray-700">
            <li>รับฝากขาย/ปล่อยเช่า บ้าน คอนโด ที่ดิน อสังหาฯ เชิงพาณิชย์</li>
            <li>ที่ปรึกษาเคส NPL–NPA และทรัพย์ปัญหา</li>
            <li>การตลาดครบวงจร: ถ่ายภาพ/วิดีโอ โฆษณาออนไลน์ คัดกรองลูกค้า</li>
            <li>ที่ปรึกษาสินเชื่อ: จัดหาแหล่งเงินกู้ จัดเตรียมเอกสาร</li>
            <li>อำนวยความสะดวกจนจบวันโอนกรรมสิทธิ์</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">วัฒนธรรมการทำงาน</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-gray-700">
            <li>ทำทันที — ตอบไว ลงมือไว เน้นผลลัพธ์</li>
            <li>ซื่อสัตย์ โปร่งใส มีวินัย และยึดจรรยาบรรณวิชาชีพ</li>
            <li>ใช้สมองและหัวใจควบคู่กัน — คิดวิเคราะห์และใส่ใจลูกค้า</li>
            <li>เรียนรู้อย่างต่อเนื่อง พัฒนาความรู้และเครื่องมือใหม่ ๆ</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 rounded-2xl border bg-gray-50 p-6">
        <h2 className="text-lg font-semibold">กระบวนการทำงานของเรา</h2>
        <ol className="mt-3 list-decimal space-y-1 pl-6 text-gray-700">
          <li>รับฟังโจทย์และสำรวจทรัพย์/เอกสาร</li>
          <li>วิเคราะห์ราคาและวางแผนกลยุทธ์การขาย–เช่า</li>
          <li>ทำการตลาด เข้าถึงกลุ่มเป้าหมาย และพาชมทรัพย์</li>
          <li>เจรจาต่อรอง จัดการเอกสาร สินเชื่อ และนัดโอนกรรมสิทธิ์</li>
        </ol>
        <a
          href="/contact"
          className="mt-4 inline-block rounded-xl bg-black px-5 py-3 text-white"
        >
          เริ่มคุยกับที่ปรึกษา
        </a>
      </div>
    </section>
  );
}