import React, { useState } from 'react'

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div>
        {isOpen && (
            <div className="md:hidden bg-gray-800 p-4 absolute top-16 right-0 w-full flex flex-col items-end space-y-4">
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 text-sm font-semibold hover:text-yellow-100"
              >
                Resume
              </a>
              <a
                href="#about"
                rel="noopener noreferrer"
                className="text-white/30 text-sm font-semibold hover:text-yellow-100"
              >
                About
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          )}
    </div>)
}
