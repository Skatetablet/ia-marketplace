import type React from "react"
import { useEffect, useState } from "react"

interface NavbarProps {
  scrollToSection?: (sectionId: string) => void
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  // Estado para controlar la opacidad del navbar en scroll
  const [scrolled, setScrolled] = useState(false)

  // Efecto para detectar el scroll y ajustar la apariencia
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              //scrollToSection("page-1")
            }}
            className="navbar-logo-hover-container"
          >
            <div className="navbar-logo-hover-effect">
              <img src="/Images/logoWhite.png" alt="IAMarket" className="navbar-logo-image" />
              
            </div>
          </a>
        </div>

        <div className="navbar-about">
          <a
            href="/marketplace"
            className="primary-button"
            style={{ 
              margin: 0, 
              height: '45px', 
              padding: '0 30px',
              fontSize: '14px'
            }}
            onClick={(e) => {
              
            }}
          >
            MARKETPLACE
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar