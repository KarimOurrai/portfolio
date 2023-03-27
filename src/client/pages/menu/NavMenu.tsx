import ThemeToggle from '@/client/component/darkmode/ThemeToggle'
import ButtonMobilbNav from '@/client/component/mobile/ButtonNav'
import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import NavBarMobile from './NavBarMobile'
import { useMediaQuery } from 'react-responsive'
import device from '@/device'

const NavMenu = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const media = useMediaQuery({ query: device.small })
  useEffect(() => {
    setIsMobile(media)
  }, [media])
  return (
    <nav className="bg-purple-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 justify-start">
        <div className="relative flex items-center justify-between h-16">
          <div className="inset-y-0 left-0 flex items-center sm:hidden">
            {isMobile && (
                <ButtonMobilbNav
                  isMenuOpen={mobileNav}
                  onClick={() => setMobileNav(!mobileNav)}
                />
              )
            }
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            {!isMobile && <NavBar />}
          </div>

          <div className="inset-0 justify-self-auto">
            <ThemeToggle />
          </div>
        </div>
        {/* Mobile menu, toggle classes based on menu state */}
        <div className="sm:hidden">
          {isMobile && <NavBarMobile isOpen={mobileNav} />}
        </div>
      </div>
    </nav>
  )
}
export default NavMenu
