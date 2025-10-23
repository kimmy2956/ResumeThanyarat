export default function Header() {
  return (
    <header className="border-b">
      <div className="container py-4 flex items-center justify-between">
        <div className="font-bold">kimmy resume</div>
        <nav className="hidden md:flex gap-4">
          <a href="#about" className="text-sm">เกี่ยวกับฉัน</a>
          <a href="#projects" className="text-sm">โปรเจคที่ผ่านมา</a>
          <a href="#contact" className="text-sm">การติดต่อ</a>
        </nav>
      </div>
    </header>
  )
}
