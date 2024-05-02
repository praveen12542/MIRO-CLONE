import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

import type { Metadata } from "next";


import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/modal-provider";
import { Suspense } from "react";
import { Loading } from "@/components/auth/loading";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", });
const font = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["600"],

});
export const metadata: Metadata = {
  title: "Miro Clone",
  description: "Miro Clone web app created with Nextjs.",
  icons: {
    icon: [{ url: "/logo.svg", href: "/logo.svg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={' ${inter.className} ${font.className}'} >
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <Toaster />
            <ModalProvider />
            {children}
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
