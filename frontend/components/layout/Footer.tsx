import Link from "next/link"
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Youtube, Instagram } from "lucide-react"

const footerSections = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Departments", href: "/departments" },
      { name: "Admissions", href: "/admissions" },
      { name: "Placements", href: "/placements" },
      { name: "Facilities", href: "/facilities" },
    ],
  },
  {
    title: "Academic",
    links: [
      { name: "Examination", href: "/examination" },
      { name: "Gallery", href: "/gallery" },
      { name: "News & Events", href: "/blog" },
      { name: "Contact", href: "/contact" },
      { name: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    title: "Contact Info",
    links: [
      { name: "Near Berhampur University, Ramachandrapur", href: "/contact" },
      { name: "Berhampur, Ganjam, Odisha - 760010", href: "/contact" },
      { name: "+91-9437062282", href: "tel:+919437062282" },
      { name: "bsetberhampur@gmail.com", href: "mailto:bsetberhampur@gmail.com" },
    ],
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">
                  BSET Berhampur
                </h3>
                <p className="text-xs text-slate-400 leading-tight">
                  Empowering Engineering Minds
                </p>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Premier Polytechnic Diploma Engineering College in Odisha.
              Approved by AICTE, Affiliated to SCTE & VT, DTET Odisha.
              ISO 9001:2008 Certified.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/BSET.BERHAMPUR/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=oUfGFe3HOZc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="mailto:bsetberhampur@gmail.com"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Bar */}
      <div className="border-t border-slate-800 bg-slate-950/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-6 justify-center">
              <a
                href="tel:+919437062282"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary-400" />
                +91-9437062282
              </a>
              <a
                href="mailto:bsetberhampur@gmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary-400" />
                bsetberhampur@gmail.com
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-primary-400" />
                Berhampur, Odisha - 760010
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-primary-400" />
                Mon-Sat: 9:00 AM - 5:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p className="flex items-center gap-1">
              © {currentYear} Berhampur School of Engineering & Technology (BSET). All rights reserved.
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> in India.
            </p>
            <div className="flex gap-6">
              <Link href="/about" className="hover:text-primary-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-primary-400 transition-colors">
                Contact
              </Link>
              <a href="https://bsetberhampur.ac.in" target="_blank" rel="noopener" className="hover:text-primary-400 transition-colors">
                Official Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}