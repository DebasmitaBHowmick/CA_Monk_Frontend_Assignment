import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
       
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-lg">
            CA MONK
          </h3>
          <p className="text-sm text-zinc-400">
            Empowering the next generation of financial leaders with tools,
            community, and knowledge.
          </p>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-medium mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>Blog</li>
            <li>Webinars</li>
            <li>Case Studies</li>
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h4 className="text-white font-medium mb-3">Platform</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>Job Board</li>
            <li>Practice Tests</li>
            <li>Mentorship</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-white font-medium mb-3">Connect</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-400 gap-2">
          <p>© 2024 CA Monk. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-white">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-white">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


