import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pavan Sai | Portfolio",
  description:
    "Frontend Developer specializing in Next.js, TypeScript, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
