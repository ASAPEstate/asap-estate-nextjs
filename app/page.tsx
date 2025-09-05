// app/page.tsx
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="text-xl font-semibold">
            ASAP <span className="text-gray-500">Estate</span>
          </div>
          <nav className="hidden gap-4 md:flex">
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          คุณภาพชีวิตดี & อยู่สุขสบาย กับ ASAP ESTATE
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          ASAP Estate — นายหน้าและที่ปรึกษาอสังหาริมทรัพย์ครบวงจร
          รับฝากขาย-เช่า บ้าน คอนโด ที่ดิน และเคส NPL–NPA ดูแลจนจบวันโอนกรรมสิทธิ์
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/projects" className="rounded-xl bg-black px-5 py-3 text-white">
            ดูทรัพย์ทั้งหมด
          </Link>
          <Link href="/contact" className="rounded-xl border px-5 py-3">
            ติดต่อที่ปรึกษา
          </Link>
        </div>
      </section>
    </main>
  );
}