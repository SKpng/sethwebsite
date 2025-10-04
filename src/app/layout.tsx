import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/common/header"
import { PasswordProtection } from "@/components/auth/password-protection"

export const metadata: Metadata = {
  title: "Seth Karallis - Actor & Performer",
  description: "Professional actor based in London. Specializing in theater, film, and television with classical training from RADA.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <PasswordProtection>
          <Header />
          <main>{children}</main>
        </PasswordProtection>
      </body>
    </html>
  )
}