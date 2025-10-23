// src/components/ResumeSite.jsx
import React from 'react';

export default function ResumeSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 font-sans">
      {/* ---- HEADER ---- */}
      <header className="max-w-4xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 via-pink-500 to-amber-400 flex items-center justify-center text-slate-900 font-bold text-lg">JD</div>
          <div>
            <h1 className="text-2xl font-semibold">ชื่อ นามสกุล</h1>
            <p className="text-sm text-slate-300">ตำแหน่งที่ต้องการ — นักพัฒนาเว็บ / วิศวกรซอฟต์แวร์</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-4 items-center">
          <a href="#about" className="text-sm hover:underline">About</a>
          <a href="#experience" className="text-sm hover:underline">Experience</a>
          <a href="#skills" className="text-sm hover:underline">Skills</a>
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          <a href="/resume.pdf" download className="ml-3 inline-block bg-emerald-400 text-slate-900 px-3 py-2 rounded-lg font-medium">Download CV</a>
        </nav>
        <button className="md:hidden p-2 bg-slate-800 rounded-lg">☰</button>
      </header>

      {/* ---- MAIN CONTENT ---- */}
      <main className="max-w-4xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <section className="bg-slate-800/40 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
          <div className="md:flex md:items-center md:gap-8">
            <img src="/avatar-placeholder.png" alt="avatar" className="w-32 h-32 rounded-xl object-cover border-4 border-slate-700/60"/>
            <div className="mt-4 md:mt-0">
              <h2 className="text-3xl font-bold">สวัสดีครับ/ค่ะ — ผม/ฉัน ชื่อ นามสกุล</h2>
              <p className="mt-2 text-slate-300">นักพัฒนาเว็บที่เชี่ยวชาญด้าน React, Node.js และระบบที่ปรับขยายได้ ชอบออกแบบ UX ที่ใช้งานง่ายและเขียนโค้ดที่สะอาด</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a href="/resume.pdf" download className="px-4 py-2 rounded-lg bg-emerald-400 text-slate-900 font-semibold">Download CV</a>
                <a href="#contact" className="px-4 py-2 rounded-lg border border-slate-600">Contact Me</a>
                <a href="#projects" className="px-4 py-2 rounded-lg border border-slate-600">View Projects</a>
              </div>

              <div className="mt-4 text-sm text-slate-400">
                <strong>Location:</strong> Bangkok, Thailand — <strong>Email:</strong> youremail@example.com — <strong>Phone:</strong> +66 8x-xxx-xxxx
              </div>
            </div>
          </div>
        </section>

        {/* ... (ส่วนอื่นๆ ตามต้นฉบับ) ... */}

        <footer className="mt-10 text-center text-slate-500 text-sm">© {new Date().getFullYear()} ชื่อ นามสกุล — Built with ❤️</footer>
      </main>
    </div>
  );
}

