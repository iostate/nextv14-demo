'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import './styles.css';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState('');
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div>
      {/* DOM elements will be recreated and a new instance of component
      will be mounted when using template */}
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      </div>

      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
