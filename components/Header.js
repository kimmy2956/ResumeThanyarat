export default function Header() {
  return (
    <header className="border-b">
      <div className="container py-4 flex items-center justify-between">
        <div className="font-bold">Resume</div>
        <nav className="hidden md:flex gap-4">
          <a href="#about" className="text-sm">ข้อมูลการศึกษา</a>
          <a href="#contact" className="text-sm">การติดต่อ</a>
        </nav>
      </div>
    </header>
  )
}
