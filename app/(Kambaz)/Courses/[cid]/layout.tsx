"use client";

import { ReactNode } from "react";
import CourseNavigation from "../CourseNavigation";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  return (
    <div id="wd-courses">
      <table>
        <tbody>
          <tr>
            <td valign="top" width="200">
              <CourseNavigation />
            </td>
            <td valign="top" width="100%">
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}





