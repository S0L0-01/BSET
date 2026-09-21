"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Bell, Search, Sun, Moon, Phone, Mail } from "lucide-react"
import { Button } from "../../components/ui/button"
import { cn } from "../../lib/utils"
import { useTheme } from "next-themes"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Departments", href: "/departments" },
  { name: "Admissions", href: "/admissions" },
  { name: "Placements", href: "/placements" },
  { name: "Facilities", href: "/facilities" },
  { name: "Examination", href: "/examination" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const pathname = usePathname()
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsDark(resolvedTheme === "dark")
  }, [resolvedTheme])

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    setTheme(newTheme)
    setIsDark(!isDark)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass shadow-md py-2"
          : "bg-white/5 dark:bg-slate-950/5 backdrop-blur-sm py-4"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight text-white">
              BSET Berhampur
            </span>
            <span className="text-xs text-white/70 leading-tight">
              Empowering Engineering Minds
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "text-white bg-white/20"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 text-white">
          <Button variant="ghost" size="icon" className="hidden md:flex text-white hover:text-white hover:bg-white/10" aria-label="Search">
            <Search className="w-5 h-5 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-white hover:text-white hover:bg-white/10"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-white" />
            ) : (
              <Moon className="w-5 h-5 text-white" />
            )}
          </Button>
          <Button
            variant="default"
            size="sm"
            className="hidden md:flex bg-white/20 text-white hover:bg-white/30"
            asChild
          >
            <Link href="/admissions">
              <Bell className="w-4 h-4 text-white" />
              Apply Now
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass border-t border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "text-white bg-white/20"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
              <a
                href="tel:+919437062282"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white"
              >
                <Phone className="w-4 h-4 text-white" />
                +91-9437062282
              </a>
              <a
                href="mailto:bsetberhampur@gmail.com"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white"
              >
                <Mail className="w-4 h-4 text-white" />
                bsetberhampur@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}