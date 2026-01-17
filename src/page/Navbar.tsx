import React from 'react';
import Logo from '@/assets/logo.png';
import { Button } from '@/components/ui/button';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
     <header >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left */}
        <div className="flex items-center gap-8">
          <img src={Logo} alt="Logo" className="h-8 w-8" />
          <Link to="/" className="font-bold text-lg">
            CA MONK
          </Link>

          <nav className="hidden md:flex gap-6 text-sm text-muted-foreground">
            <NavLink to="#">Tools</NavLink>
            <NavLink to="#">Practice</NavLink>
            <NavLink to="#">Events</NavLink>
            <NavLink to="#">Job Board</NavLink>
            <NavLink to="#">Points</NavLink>
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <Link to="/post-blog">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Post Blog</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar