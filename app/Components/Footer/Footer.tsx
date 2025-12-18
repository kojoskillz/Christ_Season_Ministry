import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
})

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id='Footer' className="py-8 bg-black border-t border-gray-800">
      <div className={`container mx-auto px-4 ${orbitron.variable} font-sans`}>
        
        {/* Social Media Links as Text */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8 mb-6">
          <a 
            href="https://www.facebook.com/share/1DCDna7asG/" 
            className="text-white font-[family-name:var(--font-orbitron)] font-bold hover:text-gray-300 transition-colors text-2xl sm:text-3xl lg:text-4xl tracking-tight"
          >
            FACEBOOK
          </a>
          <a 
            href="https://www.youtube.com/@danielafanvi" 
            className="text-white font-[family-name:var(--font-orbitron)] font-bold hover:text-gray-300 transition-colors text-2xl sm:text-3xl lg:text-4xl tracking-tight"
          >
            YOUTUBE
          </a>
          <a 
            href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=11u4kum" 
            className="text-white font-[family-name:var(--font-orbitron)] font-bold hover:text-gray-300 transition-colors text-2xl sm:text-3xl lg:text-4xl tracking-tight"
          >
            INSTAGRAM
          </a>
        </div>

        {/* Contact Number */}
        <div className="text-center mb-6">
          <a 
            href="tel:+233249740999" 
            className="inline-flex items-center justify-center text-gray-300 hover:text-white transition-colors group"
          >
            <svg 
              className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
              />
            </svg>
            <span className="text-lg font-medium tracking-wide">
              0249740999
            </span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-gray-500 text-xs sm:text-sm md:text-base">
            Copyright © {currentYear} Apostle Daniel Afanvi, All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
