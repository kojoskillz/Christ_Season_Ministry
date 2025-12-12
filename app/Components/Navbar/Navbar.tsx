'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Church, Bell, User, Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect with useEffect to prevent hydration issues
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '.#About' },
    { name: 'Sermons', href: '#Sermons' },
    { name: 'Contact', href: '#Footer' },
  ]

  // Enhanced glass effect styles
  const glassStyles = `
    backdrop-blur-md 
    bg-white/5 
    border border-white/20 
    shadow-2xl 
    shadow-black/20
  `

  const subtleGlassStyles = `
    backdrop-blur-sm
    bg-gradient-to-b 
    from-dark-DEFAULT/95 
    via-dark-DEFAULT/85 
    to-transparent
  `

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? `${glassStyles} py-3` 
          : `${subtleGlassStyles} py-5`
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="p-2 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-105 border border-white/10">
              <Church className="h-7 w-7 text-white" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold font-serif tracking-tight text-white">
                Christ<span className="text-primary-300">Season</span>
              </h1>
              <p className="text-xs text-white/70 tracking-wider">MINISTRY</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium backdrop-blur-sm ${
                  pathname === item.href
                    ? 'text-white bg-white/20 border border-white/30'
                    : 'text-white/80 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <button className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors backdrop-blur-sm border border-transparent hover:border-white/10">
              <Search size={20} />
            </button>
            <button className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors relative backdrop-blur-sm border border-transparent hover:border-white/10">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-500/20 border border-primary-400/30">
              <User size={18} />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button className="p-2 text-white/80 hover:text-white">
              <Search size={22} />
            </button>
            <button
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 animate-slide-up">
            <div className={`${glassStyles} rounded-2xl p-6 border-white/20`}>
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm border ${
                      pathname === item.href
                        ? 'text-white bg-white/20 border-white/30'
                        : 'text-white/80 hover:text-white hover:bg-white/10 border-transparent hover:border-white/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.name}</span>
                      <div className="w-2 h-2 rounded-full bg-primary-300 animate-pulse"></div>
                    </div>
                  </Link>
                ))}
                
                {/* Mobile Action Buttons */}
                <div className="pt-4 border-t border-white/20 space-y-3">
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl font-semibold transition-colors shadow-lg shadow-primary-500/20 border border-primary-400/30">
                    <User size={18} />
                    <span>Member Login</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-white/20 text-white hover:bg-white/10 rounded-xl font-semibold transition-colors backdrop-blur-sm">
                    <Bell size={18} />
                    <span>Notifications</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
