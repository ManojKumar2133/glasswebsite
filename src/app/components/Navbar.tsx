import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/workforce", label: "Workforce" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <span className="text-2xl font-bold tracking-tight text-[#a31515]">GlassPro</span>
        <ul className="flex gap-6 text-lg font-medium text-gray-900">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-[#a31515] transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
