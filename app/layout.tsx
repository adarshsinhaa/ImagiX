import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { 
  ClerkProvider, 
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import "./globals.css";
import { dark } from '@clerk/themes'

const IBMPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "Imaginify is a powerful AI-image generation tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider signInFallbackRedirectUrl='/' appearance={{
      baseTheme: dark,
      variables: {
        colorPrimary: '#624cf5',
      },
      }}>
      <html lang="en">
        <body
          className={cn("font-sans", IBMPlex.variable, "bg-white text-slate-900 antialiased")}
        >
        {/* <header className="flex justify-end items-center p-4 gap-4 h-16">
          <SignedOut>
            <SignInButton/>
            <SignUpButton/>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </header> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
