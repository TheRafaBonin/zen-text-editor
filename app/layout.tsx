import type { Metadata } from 'next'
import { Josefin_Sans, Crimson_Text, Barlow } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const josefinSans = Josefin_Sans({
	variable: '--font-josefin-sans',
	subsets: ['latin'],
})

const crimsonText = Crimson_Text({
	variable: '--font-crimson-text',
	subsets: ['latin'],
	weight: '400',
})

const barlow = Barlow({
	variable: '--font-barlow',
	subsets: ['latin'],
	weight: '200',
})

export const metadata: Metadata = {
	title: 'Zen Text Editor',
	description:
		'A distraction-free, minimalist text editor for deep focus and seamless writing.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<Head>
				<title>Zen Text Editor</title>
				<meta
					name="description"
					content="A distraction-free, minimalist text editor for deep focus and seamless writing."
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
				/>
			</Head>
			<body
				className={`${josefinSans.variable} ${crimsonText.variable} ${barlow.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
