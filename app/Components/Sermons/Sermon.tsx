'use client'

import { useState } from 'react'
import { Play, Calendar, Clock, User, Filter, ExternalLink, BookOpen, Download } from 'lucide-react'
import { Orbitron } from 'next/font/google'


const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
})

const SermonsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedSermon, setSelectedSermon] = useState(0)

  const sermonCategories = [
    { id: 'all', label: 'All Sermons' },
    { id: 'recent', label: 'Recent' },
    { id: 'series', label: 'Series' },
    { id: 'topical', label: 'Topical' },
    { id: 'seasonal', label: 'Seasonal' },
    { id: 'foundational', label: 'Foundational' }
  ]



  
  const sermons = [
    {
      id: 1,
      title: "The Power of Grace",
      preacher: "Rev. Dr. Michael Johnson",
      date: "Dec 10, 2023",
      duration: "45:22",
      category: "recent",
      series: "Amazing Grace",
      verse: "Ephesians 2:8-9",
      description: "Exploring the transformative power of God's grace in our daily lives and how it sets us free from condemnation.",
      thumbnail: "/api/placeholder/400/225",
      videoUrl: "#",
      audioUrl: "#",
      notesUrl: "#",
      views: "2.4K",
      likes: 324
    },
    {
      id: 2,
      title: "Faith in Uncertain Times",
      preacher: "Pastor Sarah Williams",
      date: "Dec 3, 2023",
      duration: "38:15",
      category: "topical",
      series: "Living by Faith",
      verse: "Hebrews 11:1",
      description: "Learning to trust God completely when facing life's uncertainties and challenges.",
      thumbnail: "/api/placeholder/400/225",
      videoUrl: "#",
      audioUrl: "#",
      notesUrl: "#",
      views: "1.8K",
      likes: 267
    },
    {
      id: 3,
      title: "The Prodigal's Return",
      preacher: "Rev. David Chen",
      date: "Nov 26, 2023",
      duration: "52:10",
      category: "series",
      series: "Parables of Jesus",
      verse: "Luke 15:11-32",
      description: "A deep dive into the parable of the prodigal son and what it teaches us about God's unconditional love.",
      thumbnail: "/api/placeholder/400/225",
      videoUrl: "#",
      audioUrl: "#",
      notesUrl: "#",
      views: "3.1K",
      likes: 412
    },
    {
      id: 4,
      title: "Living Water",
      preacher: "Rev. Dr. Michael Johnson",
      date: "Nov 19, 2023",
      duration: "41:33",
      category: "seasonal",
      series: "Spiritual Refreshment",
      verse: "John 4:13-14",
      description: "Understanding Jesus as the living water that quenches our spiritual thirst forever.",
      thumbnail: "/api/placeholder/400/225",
      videoUrl: "#",
      audioUrl: "#",
      notesUrl: "#",
      views: "1.9K",
      likes: 289
    },
    {
      id: 5,
      title: "The Armor of God",
      preacher: "Pastor Sarah Williams",
      date: "Nov 12, 2023",
      duration: "47:55",
      category: "foundational",
      series: "Spiritual Warfare",
      verse: "Ephesians 6:10-18",
      description: "Equipping believers with the full armor of God to stand against spiritual attacks.",
      thumbnail: "/api/placeholder/400/225",
      videoUrl: "#",
      audioUrl: "#",
      notesUrl: "#",
      views: "2.7K",
      likes: 356
    },
    {
      id: 6,
      title: "Joy of Generosity",
      preacher: "Rev. David Chen",
      date: "Nov 5, 2023",
      duration: "36:42",
      category: "topical",
      series: "Kingdom Principles",
      verse: "2 Corinthians 9:6-7",
      description: "Discovering the joy and blessings that come from a generous heart.",
      thumbnail: "/api/placeholder/400/225",
      videoUrl: "#",
      audioUrl: "#",
      notesUrl: "#",
      views: "1.5K",
      likes: 198
    }
  ]

  const filteredSermons = activeFilter === 'all' 
    ? sermons 
    : sermons.filter(sermon => sermon.category === activeFilter)

  const featuredSermon = sermons[selectedSermon]

  return (
    <section id='Sermons' className={`py-20 bg-black ${orbitron.variable}`}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-12 h-1  bg-blue-500 rounded-full"></div>
            <span className="text-primary-400  font-semibold font-[family-name:var(--font-orbitron)] tracking-wider uppercase text-sm">
              Spiritual Nourishment
            </span>
            <div className="w-12 h-1  bg-blue-500 rounded-full rounded-full"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-orbitron)] lg:text-6xl font-bold mb-6">
            <span className="text-white ">Weekly</span>{' '}
            <span className="text-transparent bg-clip-text  bg-blue-600 rounded-full">
              Sermons
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our collection of inspiring messages designed to strengthen your faith and deepen your relationship with God.
          </p>
        </div>

        {/* Featured Sermon */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center space-x-3">
              <div className="p-2 bg-primary-600 rounded-lg">
                <Play size={20} />
              </div>
              <span>Featured Message</span>
            </h3>
            <div className="text-sm text-gray-400">
              {selectedSermon + 1} of {sermons.length}
            </div>
          </div>

          <div className="glass rounded-3xl overflow-hidden border border-gray-800">
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              {/* Left: Video Player */}
              <div className="relative group">
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black relative">
                  {/* Video Thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-purple-900/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-gradient-to-r  bg-blue-600  rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110 shadow-2xl">
                      <Play size={32} className="ml-1 text-white" />
                    </button>
                  </div>
                  
                  {/* Video Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-primary-600 rounded-full text-sm font-semibold">
                          {featuredSermon.duration}
                        </span>
                        <span className="px-3 py-1 bg-gray-800/80 rounded-full text-sm">
                          {featuredSermon.series}
                        </span>
                      </div>
                      <div className="text-sm text-gray-300">
                        {featuredSermon.views} views
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Sermon Details */}
              <div className="flex flex-col">
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
                      {featuredSermon.category.charAt(0).toUpperCase() + featuredSermon.category.slice(1)}
                    </span>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {featuredSermon.date}
                    </span>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {featuredSermon.title}
                  </h4>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <User size={18} />
                      <span className="font-medium">{featuredSermon.preacher}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-primary-400">
                      <BookOpen size={18} />
                      <span className="font-medium">{featuredSermon.verse}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {featuredSermon.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <button className="flex items-center justify-center space-x-2  bg-blue-600  text-white py-3 rounded-xl font-semibold transition-all duration-300">
                    <Play size={20} />
                    <span>Watch Now</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white py-3 rounded-xl font-semibold transition-all duration-300 group">
                    <Download size={20} className="group-hover:animate-bounce" />
                    <span>Download MP3</span>
                  </button>
                </div>

                {/* Additional Resources */}
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                      <ExternalLink size={18} />
                      <span className="text-sm">Sermon Notes</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                      <BookOpen size={18} />
                      <span className="text-sm">Study Guide</span>
                    </button>
                    <div className="flex items-center space-x-4">
                      <button className="text-gray-400 hover:text-red-400 transition-colors">
                        ♡ {featuredSermon.likes}
                      </button>
                      <button className="text-gray-400 hover:text-blue-400 transition-colors">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {sermonCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r  bg-blue-600  text-white shadow-lg'
                    : 'bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {activeFilter === category.id && <Filter size={16} />}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sermons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.map((sermon) => (
            <div 
              key={sermon.id}
              className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={() => setSelectedSermon(sermon.id - 1)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-purple-900/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/80 text-white rounded-full text-sm font-semibold">
                    {sermon.duration}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary-600/80 text-white rounded-full text-sm">
                    {sermon.series}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16  bg-blue-600  rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                    <Play size={24} className="ml-1 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {sermon.title}
                    </h4>
                    <p className="text-sm text-gray-400 flex items-center">
                      <User size={14} className="mr-2" />
                      {sermon.preacher}
                    </p>
                  </div>
                  <button className="text-gray-500 hover:text-white">
                    <ExternalLink size={18} />
                  </button>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {sermon.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-400 flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {sermon.date}
                    </span>
                    <span className="text-primary-400 flex items-center">
                      <BookOpen size={14} className="mr-1" />
                      {sermon.verse}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {sermon.views} views
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="group border-2 border-gray-700 hover:border-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3 mx-auto hover:bg-gray-900/30">
            <span>View All Sermons</span>
            <ExternalLink className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default SermonsSection
