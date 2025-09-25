'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';

export default function ClientSidebar() {
  const pathname = usePathname() || '';

  // hide sidebar on signin/signup
  const hideSidebar =
    pathname.startsWith('/Account/Signin') ||
    pathname.startsWith('/Account/Signup');

  if (hideSidebar) return null;
  return <Navigation />;
}
