export const metadata = {
  title: "Projects | ASAP Estate",
  description:
    "รวมทรัพย์พร้อมขาย-เช่า รับฝากขาย ฝากเช่า บ้าน คอนโด ที่ดิน และอสังหาฯ เชิงพาณิชย์ โดย ASAP Estate",
};

type Listing = {
  id: string;
  title: string;
  location: string;
  price: string;
  type: "ขาย" | "เช่า" | "ฝากขาย";
  image: string;
};

const listings: Listing[] = [
  {
    id: "1",
    title: "บ้านเดี่ยว Modern 70 ตร.วา",
    location: "บางนา–ตราด, กรุงเทพฯ",
    price: "เริ่ม 8.9 ลบ.",
    type: "ขาย",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "คอนโด High-Rise 2 ห้องนอน",
    location: "พระราม 9, กรุงเทพฯ",
    price: "เช่า 28,000 บ./ด.",
    type: "เช่า",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "ที่ดินเปล่า 5 ไร่",
    location: "ศรีราชา, ชลบุรี",
    price: "สอบถาม",
    type: "ฝากขาย",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">ทรัพย์สินพร้อมขาย–เช่า</h1>
        <p className="mt-2 text-gray-600">
          นายหน้าและที่ปรึกษาแบบครบวงจร: รับฝากขาย-เช่า บ้าน คอนโด ที่ดิน
          และอสังหาฯ เชิงพาณิชย์ พร้อมช่วยวิเคราะห์ราคา ทำการตลาด เจรจาต่อรอง
          และดูแลจนจบวันโอนกรรมสิทธิ์
        </p>
      </header>

      <div className="mb-6 flex flex-wrap items-center gap-2 text-sm">
        <span className="rounded-full bg-gray-100 px-3 py-1">ทั้งหมด</span>
        <span className="rounded-full bg-gray-100 px-3 py-1">ขาย</span>
        <span className="rounded-full bg-gray-100 px-3 py-1">เช่า</span>
        <span className="rounded-full bg-gray-100 px-3 py-1">ฝากขาย</span>
        <span className="ml-auto text-gray-500">
          *ข้อมูลตัวอย่าง—ต่อฐานข้อมูลจริงได้ภายหลัง
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((p) => (
          <article
            key={p.id}
            className="overflow-hidden rounded-2xl border shadow-sm transition hover:shadow-md"
          >
            <div className="aspect-[4/3] w-full bg-gray-100">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-1 p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{p.title}</h3>
                <span className="rounded-full bg-black px-2 py-0.5 text-xs text-white">
                  {p.type}
                </span>
              </div>
              <p className="text-sm text-gray-600">{p.location}</p>
              <p className="font-medium">{p.price}</p>
              <div className="pt-2">
                <a
                  href="/contact"
                  className="inline-block rounded-xl border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
                >
                  สนใจทรัพย์นี้ / ฝากขายกับเรา
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border bg-gray-50 p-6">
        <h2 className="text-xl font-semibold">มีทรัพย์ต้องการฝากขายหรือปล่อยเช่า?</h2>
        <p className="mt-1 text-gray-600">
          เราช่วยตั้งราคา วางแผนการตลาด ถ่ายภาพ ทำโฆษณา คัดกรองลูกค้า
          ประสานงานเอกสาร และปิดการขายให้ครบในที่เดียว
        </p>
        <a
          href="/contact"
          className="mt-4 inline-block rounded-xl bg-black px-5 py-3 text-white"
        >
          ฝากขาย/ปล่อยเช่า กับ ASAP Estate
        </a>
      </div>
    </section>
  );
}
