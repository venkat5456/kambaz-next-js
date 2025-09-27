"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
// ⬇️ CHANGE this path to match the file where you defined your global nav
// e.g., "./Navigation" if it's in app/(Kambaz)/Navigation.tsx
import GlobalNavigation from "./Navigation";  

export default function KambazLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Hide global nav if inside /Account/*
  const isAccountPage = pathname.startsWith("/Account");

  return (
    <div id="wd-kambaz">
      <table width="100%">
        <tbody>
          <tr>
            {/* Sidebar: show global nav only when NOT on Account pages */}
            {!isAccountPage && (
              <td valign="top" width="200">
                <GlobalNavigation />
              </td>
            )}

            {/* Main content */}
            <td valign="top" width="100%">
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}



