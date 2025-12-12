"use client";
import React from "react";
import { Heart } from 'lucide-react'
import Image from "next/image";
import pic0 from "../../../public/pic0.png"
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
})

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Unconditional Love",
      description: "Extending God's love to all people without judgment or condition."
    },
 
  ]

  return (
     <section id="about" className={` ${orbitron.variable} relative`}>
  
      <div className="bg-black"> 
      
      <div className=" pb-32 bg-black mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center pt-44 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-orbitron)]">
              Welcome to <span className="text-blue-600">Christ Season</span>
            </h2>
            <p className="text-xl font-[family-name:var(--font-orbitron)] text-gray-300 max-w-3xl mx-auto">
              A vibrant community where faith comes alive, relationships grow deep, and God&apos;s presence transforms lives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Stats */}
            <div className="space-y-8">
            
                <h5 className="text-xl text-white font-light uppercase mb-6 font-[family-name:var(--font-orbitron)]">[ About ]</h5>
                <h3 className="text-4xl text-white font-bold uppercase mb-6 font-[family-name:var(--font-orbitron)]">Apostle Daniel Afanvi</h3>
                <h3 className="text-md text-white font-extralight mb-6">
                     Rev. Daniel Afanvi is the founder of Christ Season Ministry
                     based in Accra, Ghana. 
                     Rev. Daniel Afanvi is the founder of Christ Season Ministry
                     based in Accra, Ghana. 
                     Rev. Daniel Afanvi is the founder of Christ Season Ministry
                     based in Accra, Ghana. 
                </h3>
                       <div className="mt-8">
                <button className="w-full md:w-auto  bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Learn More of Apostle Daniel
                </button>
              </div>
                <div className="grid grid-cols-2 gap-6">
                       
              </div>
          
            </div>

            {/* Right Column - Values */}
            <div>

              <div>
                {values.map((value, index) => (
                  <div 
                    key={value.title}
                  >
                      <Image
                        src={pic0}
                        alt="pic0"
                        width={450}
                        height={60}
                        className="  rounded-xl object-cover"
                    />
                  </div>
                ))}
              </div>
              
       
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About