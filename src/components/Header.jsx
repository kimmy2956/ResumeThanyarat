export default function Header() {
  return (
    <header className="max-w-4xl mx-auto p-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 via-pink-500 to-amber-400 flex items-center justify-center text-slate-900 font-bold text-lg">JD</div>
        <div>
          <h1 className="text-2xl font-semibold">ชื่อ นามสกุล</h1>
          <p className="text-sm text-slate-300">ตำแหน่ง — นักพัฒนาเว็บ / วิศวกรซอฟต์แวร์</p>
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
    </header>
  )
}
