import type { Metadata } from "next";
import "../styles/globals.css";
import BottomDock from "@/components/navigation/BottomDock";

export const metadata: Metadata = {
  title: "Arya Moon - Private Gallery Marketplace",
  description: "Premium private image and video galleries for sale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className="pb-20">
        {children}
        <BottomDock />
      </body>
    </html>
  );
}
