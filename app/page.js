import Image from 'next/image'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const projects = [
    { title: 'Project เว็บคำนวณ', desc: 'เว็บไซต์นี้สร้างขึ้นเพื่อคำนวณราคาสำหรับฝ่ายขาย', link: 'https://kimmy2956.github.io/salebpp-cululation/' },
    { title: 'Project เว็บทำนายฝันโดยใช้ AI', desc: 'เว็บไซต์นี้สร้างขึ้นเพื่อทำนายดวงชะตาโดยดึงใช้ข้อมูลจาก AIGemeni', link: 'https://dream-interpretation-vercel.vercel.app/' },
  ]

  return (
    <section>
      <div className="flex items-center gap-6">
        <div style={{width:120}} className="rounded-full overflow-hidden">
          <Image src="profilephoto.jpg" alt="thanyarat photo" width={120} height={120} />
        </div>
        <div>
          <h1 className="text-3xl font-bold">ธันยรัศมิ์ ประภาจิรสกุล</h1>
          <p className="text-slate-600">ตำแหน่งปัจจุบัน Sale Engineering</p>
          <p className="mt-2 text-sm text-slate-500">สรุปสั้น ๆ เกี่ยวกับตัวเอง เช่น จุดแข็งหรือประสบการณ์เด่น</p>
          <div className="mt-3 flex gap-3">
            <a href="thanyarat.phapa@gmail.com" className="px-3 py-1 border rounded">Email</a>
            <a href="https://github.com/kimmy29565" target="_blank" rel="noreferrer" className="px-3 py-1 border rounded">GitHub</a>
            <a href="/resume.pdf" className="px-3 py-1 border rounded">Download CV</a>
          </div>
        </div>
      </div>

      <hr className="my-8" />

      <section>
        <h2 className="text-2xl font-semibold">ความสามารถด้านคอมพิวเตอร์</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js'].map(s => (
            <span key={s} className="px-2 py-1 border rounded text-sm">{s}</span>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map(p => (<ProjectCard key={p.title} project={p} />))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">ประสบการณ์การทำงาน</h2>
        <div className="mt-3 space-y-3 text-slate-700">
          <div>
            <div className="font-semibold">ตำแหน่ง — บริษัทบางกอกเพรสพาร์ทส จำกัด</div>
            <div className="text-sm text-slate-500">ธันวาคม 2564 — ปัจจุบัน</div>
            <div className="mt-1">หน้าที่และความรับผิดชอบ ดูแลฝ่ายขาย</div>
          </div>
        </div>
      </section>
    </section>
  )
}
