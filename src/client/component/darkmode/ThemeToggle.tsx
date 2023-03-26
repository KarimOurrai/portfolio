'use client';
import { useEffect, useState } from 'react';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === 'dark';
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');
  const toggleClass = " transform translate-x-5";

  return (
    <div
          className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
          onClick={toggleTheme}
        >
          <div
            className={
              " md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
              (isDark ? null : toggleClass)
            }
          >
            {isDark ? (
              <IoMdMoon size={24} className="text-black"/>
            ) : (
              <IoMdSunny size={24} />
            )}
        </div>
    </div>
  );
};

export default ThemeToggle;
