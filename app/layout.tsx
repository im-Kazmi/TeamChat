import type { Metadata } from "next";
import { Inter, Questrial, Raleway, Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ThemeContextProvider from "@/context/ThemeContext";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });
const questrial = Inter({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  style: "normal",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
      >
        <body className={questrial.className}>
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
