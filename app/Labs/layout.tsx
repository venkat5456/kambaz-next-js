import { ReactNode } from "react";
import TOC from "./TOC";

export default function LabsLayout({ children }: { children: ReactNode }) {
  return (
    <table>
      <tbody>
        <tr>
          <td valign="top" width="200px"><TOC /></td>
          <td valign="top">{children}</td>
        </tr>
      </tbody>
    </table>
  );
}
