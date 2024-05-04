import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from "./providers";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ray",
  description: "architecture website",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={mont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
