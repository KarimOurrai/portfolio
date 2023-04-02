import Link from 'next/link'
import { Transition } from '@headlessui/react'

interface NavBarMobileProps {
  data : NavigationData
  isOpen: boolean
}
interface NavigationData{
  routes: Array<string>;
  button: string
}

export default function NavBarMobile({data, isOpen }: NavBarMobileProps) {
  const {routes, button} = data;
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
        {routes.map((route,index)=>(
          <Link key={index} passHref href={
            route.toLowerCase() === "home"
              ? "/"
              : route.toLowerCase() === "blog"
                ? "/blog"
                : `/#${route.toLowerCase()}`
            } legacyBehavior>
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-center font-medium">
            {route}
            </a>
          </Link>
            ))
          }
        </div>
      </div>
    </Transition>
  )
}
