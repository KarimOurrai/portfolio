import Link from 'next/link'

interface NavigationData{
  routes: Array<string>;
  button: string
}

interface NavBarProps{
  data : NavigationData;
}

export default function NavBar({data}:  NavBarProps) {
  const {routes, button} = data;

  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        {routes.map((route,index)=>(
          <Link key={index} passHref href={
            route.toLowerCase() === "home"
              ? "/"
              : route.toLowerCase() === "blog"
              ? "/blog"
              : `/#${route.toLowerCase()}`
          } legacyBehavior>
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              {route}
            </a>
          </Link>
          ))
        }
      </div>
    </div>
  )
}
