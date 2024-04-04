import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from "./providers";

// const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Ray company",
  description: "Ray company's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
