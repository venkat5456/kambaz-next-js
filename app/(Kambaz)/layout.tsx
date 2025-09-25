import { ReactNode } from "react";
import ClientSidebar from "./ClientSidebar";

export default function KambazLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <ClientSidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        {children}
      </div>
    </div>
  );
}


