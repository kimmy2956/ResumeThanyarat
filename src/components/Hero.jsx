export default function Hero() {
  return (
    <section className="bg-slate-800/40 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
      <div className="md:flex md:items-center md:gap-8">
        <img src="/avatar-placeholder.png" alt="avatar" className="w-32 h-32 rounded-xl object-cover border-4 border-slate-700/60"/>
        <div className="mt-4 md:mt-0">
          <h2 className="text-3xl font-bold">สวัสดีครับ — ผม ชื่อ นามสกุล</h2>
          <p className="mt-2 text-slate-300">
            นักพัฒนาเว็บที่เชี่ยวชาญ React, Node.js และ UX/UI ทันสมัย
          </p>

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
  )
}
