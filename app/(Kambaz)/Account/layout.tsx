import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <div id="wd-account">
      <table>
        <tbody>
          <tr>
            {/* Sidebar */}
            <td valign="top" width="200">
              <AccountNavigation />
            </td>

            {/* Page Content */}
            <td valign="top" width="100%">
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


