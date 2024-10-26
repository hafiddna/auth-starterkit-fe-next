import React from "react";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });

const figtree = Figtree();

export const metadata: Metadata = {
    title: {
        default: "Auth Starterkit - " + process.env.NEXT_PUBLIC_APP_NAME,
        template: "%s | " + process.env.NEXT_PUBLIC_APP_NAME,
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${figtree.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
