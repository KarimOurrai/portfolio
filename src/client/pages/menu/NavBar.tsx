import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        <Link href="/" legacyBehavior>
          <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Home
          </a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            About
          </a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Contact
          </a>
        </Link>
      </div>
    </div>
  )
}
