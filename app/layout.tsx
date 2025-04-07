import './globals.css'
import NavBar from '../components/NavBar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'IDMentor Tailwind',
    description: 'Voice-first AI with Tailwind + Next.js 15',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="min-h-screen w-full">
        <NavBar />
        <div className="pt-16"> {/* pour laisser la navbar fixe */}
            {children}
        </div>
        </body>
        </html>
    )
}
