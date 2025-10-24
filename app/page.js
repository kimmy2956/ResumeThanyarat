import Image from 'next/image'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const projects = [
    {
      title: 'Project เว็บคำนวณ',
      desc: 'เว็บไซต์นี้สร้างขึ้นเพื่อคำนวณราคาสำหรับฝ่ายขาย',
      link: 'https://kimmy2956.github.io/salebpp-cululation/',
    },
    {
      title: 'Project เว็บทำนายฝันโดยใช้ AI',
      desc: 'เว็บไซต์นี้สร้างขึ้นเพื่อทำนายดวงชะตาโดยใช้ข้อมูลจาก AI Gemini',
      link: 'https://dream-interpretation-vercel.vercel.app/',
    },
    {
      title: 'Project Application สำหรับสต็อกยา',
      desc: 'แอปพลิเคชันจัดการคลังยาด้วย Glide App',
      link: 'https://stockploy-medicine.glide.page/dl/d0a5f4',
    },
  ]

  return (
    <main className="max-w-4xl mx-auto px-6 py-10 text-slate-800">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl shadow-md">
        <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-indigo-200">
          {/* 📸 รูปโปรไฟล์ - ใส่ไฟล์ profile.jpg ใน public */}
          <Image src="public/profile.jpg" alt="profile" width={128} height={128} className="object-cover" />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold text-indigo-700">ธันยรัศมิ์ ประภาจิรสกุล</h1>
          <p className="text-slate-600">ตำแหน่งปัจจุบัน: Sale Engineering</p>
          <p className="mt-2 text-sm text-slate-500">
            รักการเรียนรู้เทคโนโลยีใหม่ ๆ ทำงานเป็นระบบ มุ่งมั่นพัฒนาอย่างต่อเนื่อง
          </p>
          <div className="mt-3 flex justify-center sm:justify-start gap-3">
            <a
              href="mailto:thanyarat.phapa@gmail.com"
              className="px-3 py-1 border border-indigo-400 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
            >
              Email
            </a>
            <a
              href="https://github.com/kimmy2956"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 border border-indigo-400 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="/resume.pdf"
              className="px-3 py-1 border border-indigo-400 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Skills */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-3">💻 ความสามารถด้านคอมพิวเตอร์</h2>
        <div className="flex flex-wrap gap-2">
          {['Java', 'HTML', 'CSS', 'Photoshop', 'IT Support'].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-indigo-50 border border-indigo-200 rounded-full text-sm text-indigo-700 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">🚀 Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">📂 ประสบการณ์การทำงาน</h2>
        <div className="space-y-4">
          <div className="p-4 border border-slate-200 rounded-xl hover:shadow transition">
            <div className="font-semibold text-slate-800">
              Sale Engineering — บริษัท บางกอกเพรสพาร์ทส จำกัด
            </div>
            <div className="text-sm text-slate-500">ธันวาคม 2564 — ปัจจุบัน</div>
            <p className="mt-1 text-slate-600">ดูแลฝ่ายขายและให้คำปรึกษาด้านเทคนิคสินค้า</p>
          </div>
          <div className="p-4 border border-slate-200 rounded-xl hover:shadow transition">
            <div className="font-semibold text-slate-800">
              Support Technical Engineering — บริษัท ทรูคอร์ปอเรชั่น จำกัด
            </div>
            <div className="text-sm text-slate-500">ธันวาคม 2564 — ปัจจุบัน</div>
            <p className="mt-1 text-slate-600">
              ชัพพอร์ตด้านเทคนิค ติดตั้งและแก้ไขปัญหาระบบอินเทอร์เน็ต
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} ธันยรัศมิ์ ประภาจิรสกุล. All rights reserved.
      </footer>
    </main>
  )
}
