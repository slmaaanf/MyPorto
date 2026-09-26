import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
  ["Work", "/#work"],
  ["Experience", "/#experience"],
  ["Organizations", "/#organizations"],
  ["Achievements", "/#achievements"],
  ["About", "/#about"],
  ["Contact", "/#contact"],
];

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a
          className="brand"
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Salma Nurfauziah home"
        >
          SN<span>.</span>
        </a>

        <div className="nav-desktop">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}

          <a
            className="nav-resume"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </div>

        <button
          className="menu-btn"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className={`nav-mobile ${open ? "open" : ""}`}>
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
          className="nav-resume"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          Resume ↗
        </a>
        </div>
      </nav>
    </header>
  );
}