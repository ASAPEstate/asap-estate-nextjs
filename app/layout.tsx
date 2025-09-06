// app/layout.tsx

// external
import { Inter } from "next/font/google";
import Link from "next/link";

import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ASAP Estate",
  description:
    "ที่ปรึกษาอสังหาริมทรัพย์ครบวงจร — ฝากขาย ปล่อยเช่า ประเมินราคา และจัดการสินเชื่อ",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} antialiased bg-white text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <header className="border-b">
            <nav
              aria-label="หลัก"
              className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4"
            >
              <Link href="/" className="font-semibold tracking-tight text-lg">
                ASAP <span className="text-gray-500">Estate</span>
              </Link>
              <div className="flex flex-wrap items-center gap-5 text-sm">
                <Link href="/" className="hover:text-gray-700">หน้าแรก</Link>
                <Link href="/about" className="hover:text-gray-700">เกี่ยวกับเรา</Link>
                <Link href="/contact" className="hover:text-gray-700">ติดต่อเรา</Link>
                <Link
                  href="/contact"
                  className="rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
                >
                  ฝากขาย/ปล่อยเช่า
                </Link>
              </div>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="mt-12 border-t">
            <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
              <div>
                <p className="font-semibold">ASAP Estate</p>
                <p className="mt-2 text-sm text-gray-600">
                  ที่ปรึกษาอสังหาริมทรัพย์ครบวงจร ฝากขาย–ปล่อยเช่า ประเมินราคา จัดไฟแนนซ์
                </p>
              </div>
              <div className="text-sm">
                <p className="font-semibold">ติดต่อ</p>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>โทร: <a href="tel:+6620000000" className="underline">02-xxx-xxxx</a></li>
                  <li>อีเมล: <a href="mailto:hello@asapestate.co.th" className="underline">hello@asapestate.co.th</a></li>
                  <li>LINE Official: @asapestate</li>
                </ul>
              </div>
              <div className="text-sm">
                <p className="font-semibold">ลิงก์</p>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li><Link href="/about" className="underline">เกี่ยวกับเรา</Link></li>
                  <li><Link href="/contact" className="underline">ติดต่อเรา</Link></li>
                  <li><Link href="/" className="underline">นโยบายความเป็นส่วนตัว</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t py-5">
              <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-xs text-gray-500">
                <p>© {new Date().getFullYear()} ASAP Estate Co., Ltd. สงวนลิขสิทธิ์</p>
                <p className="hidden sm:block">Built with Next.js</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

