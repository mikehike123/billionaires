import { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      {children}
      <GoogleAnalytics gaId="G-HNGNNCHSRJ" />
    </div>
  );
}