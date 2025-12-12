'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, Calendar, ChevronDown, Cross } from 'lucide-react'
import Link from 'next/link'
import { Rajdhani, Orbitron, Exo_2, Chakra_Petch } from 'next/font/google'

// Choose one of these similar modern tech fonts:
const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-rajdhani',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
})

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-exo2',
})

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-chakra-petch',
})

const HeroSection = () => {
  const [verseIndex, setVerseIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  
  const scriptures = [
    {
      text: "For God so loved the world that he gave his one and only Son...",
      reference: "John 3:16"
    },
    {
      text: "I can do all things through Christ who strengthens me.",
      reference: "Philippians 4:13"
    },
    {
      text: "The Lord is my shepherd, I lack nothing.",
      reference: "Psalm 23:1"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setVerseIndex((prev) => (prev + 1) % scriptures.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Auto-play video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error)
        // Add fallback or user interaction to play
      })
    }
  }, [])

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true)
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video play error:', error)
      })
    }
  }

  return (
    <section className={`${rajdhani.variable} ${orbitron.variable} ${exo2.variable} ${chakraPetch.variable} relative min-h-screen pb-20 flex items-center justify-center overflow-hidden pt-16`}>
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* HTML5 Video Player */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoaded}
          poster="/images/hero-fallback.jpg" // Optional: fallback image while video loads
        >
          <source src="/vid0.mp4" type="video/mp4" />
          {/* Optional: Add WebM format for better performance */}
          {/* <source src="/vid0.webm" type="video/webm" /> */}
          Your browser does not support the video tag.
        </video>
        
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
        
        {/* Loading fallback */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <div className="text-white">Loading video...</div>
          </div>
        )}
      </div>
      
      {/* Animated Gradient Orbs - reduced opacity for video background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse delay-1000 z-0"></div>
      
      {/* Cross Pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-20 left-20">
          <Cross size={40} />
        </div>
        <div className="absolute top-40 right-40">
          <Cross size={60} />
        </div>
        <div className="absolute bottom-40 left-40">
          <Cross size={50} />
        </div>
        <div className="absolute bottom-20 right-20">
          <Cross size={30} />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mt-20 mx-auto">
      
          {/* Main Heading */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="font-[family-name:var(--font-orbitron)] text-white tracking-tighter drop-shadow-lg">
                ENCOUNTER
              </span>
            </h1>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-6">
              <span className="font-[family-name:var(--font-orbitron)] text-white tracking-tight drop-shadow-lg">
                God&apos;s{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 animate-gradient">
                  Presence
                </span>
              </span>
            </h2>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 text-center mb-12 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-rajdhani)] font-light drop-shadow-lg">
            A place where faith grows, lives are transformed, and community thrives through the love of Christ.
          </p>

          {/* Scripture Carousel */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-black/50 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 shadow-2xl">
              <div className="flex items-start">
                <div className="text-4xl text-yellow-400 mr-4 drop-shadow">"</div>
                <div className="flex-1">
                  <p className="text-lg md:text-xl text-gray-100 mb-4 leading-relaxed font-[family-name:var(--font-rajdhani)] font-light drop-shadow">
                    {scriptures[verseIndex].text}
                  </p>
                  <p className="text-yellow-300 font-[family-name:var(--font-rajdhani)] font-bold tracking-wider drop-shadow">
                    — {scriptures[verseIndex].reference}
                  </p>
                </div>
              </div>
              <div className="flex justify-center space-x-2 mt-6">
                {scriptures.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setVerseIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === verseIndex 
                        ? 'bg-yellow-400 w-8' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/services"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-900/50 flex items-center space-x-3 group font-[family-name:var(--font-rajdhani)] tracking-wide hover:from-blue-700 hover:to-blue-900"
            >
              <span>Join Us This Sunday</span>
              <Calendar className="group-hover:rotate-12 transition-transform" />
            </Link>
            
            <button className="group border-2 border-white/30 hover:border-yellow-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-white/10 backdrop-blur-sm font-[family-name:var(--font-rajdhani)] tracking-wide shadow-2xl hover:shadow-yellow-900/30">
              <Play className="text-yellow-300 group-hover:text-yellow-400 transition-colors" />
              <span>Watch Live Stream</span>
            </button>
          </div>

          {/* Add to globals.css for gradient animation */}
          <style jsx global>{`
            @keyframes gradient {
              0%, 100% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
            }
            
            .animate-gradient {
              background-size: 200% 200%;
              animation: gradient 3s ease infinite;
            }
          `}</style>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute mb-10 bottom-[-28] left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="text-white/80 drop-shadow-lg" size={32} />
      </div>
    </section>
  )
}

export default HeroSection
