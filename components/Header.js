export default function Header() {
  return (
    <header className="border-b">
      <div className="container py-4 flex items-center justify-between">
        <div className="font-bold">ชื่อของคุณ</div>
        <nav className="hidden md:flex gap-4">
          <a href="#about" className="text-sm">About</a>
          <a href="#projects" className="text-sm">Projects</a>
          <a href="#contact" className="text-sm">Contact</a>
        </nav>
      </div>
    </header>
  )
}
