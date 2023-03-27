import Link from 'next/link'
import { Transition } from '@headlessui/react'

interface NavBarMobileProps {
  isOpen: boolean
}

export default function NavBarMobile({ isOpen }: NavBarMobileProps) {
  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" passHref legacyBehavior>
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-center font-medium">
              Home
            </a>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-center font-medium">
              About
            </a>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-center font-medium">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </Transition>
  )
}
