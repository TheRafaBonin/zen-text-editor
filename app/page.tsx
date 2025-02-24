'use client'
// page.tsx
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
	const [text, setText] = useState('')
	const fullText = ['PURE FOCUS. TOTAL FLOW.', 'UNLIMITED CREATIVITY.'] // Each phrase is now an array element
	const typingSpeed = 50 // Typing speed in milliseconds
	const lineDelay = 10 // Delay between lines

	useEffect(() => {
		let i = 0,
			j = 0
		let currentText = ''

		const interval = setInterval(() => {
			if (i < fullText[j].length) {
				currentText = fullText[j].slice(0, i + 1)
				setText((prev) => {
					const lines = prev.split('\n')
					lines[j] = currentText
					return lines.join('\n')
				})
				i++
			} else {
				if (j < fullText.length - 1) {
					j++
					i = 0
					setTimeout(() => setText((prev) => prev + '\n'), lineDelay) // Adds a new line delay
				} else {
					clearInterval(interval)
				}
			}
		}, typingSpeed)

		return () => clearInterval(interval)
	}, [])

	return (
		<>
			<div className="flex flex-col min-h-screen bg-[#121212]">
				<main className="flex flex-col items-center justify-center flex-grow bg-[#121212] text-white p-4">
					<h1 className="text-4xl sm:text-6xl md:text-8xl font-thin tracking-wide font-barlow text-center">
						ZEN EDITOR
					</h1>
					<p className="text-base sm:text-xl lg:text-2xl text-gray-400 mt-4 sm:mt-6 font-barlow max-w-xl text-center whitespace-pre-line mb-10 sm:mb-20 h-12">
						{text}
						<span className="animate-blink">|</span>
					</p>
					<Link href="/editor">
						<button className="mt-6 sm:mt-10 px-6 sm:px-8 py-3 sm:px-10 sm:py-4 bg-white text-black font-bold text-lg rounded-md shadow-md hover:bg-gray-300 transition-all font-barlow">
							Enter the Zone
						</button>
					</Link>
				</main>
				<footer className="text-center text-gray-500 text-sm sm:text-base py-4 bg-[#1A1A1A] font-crimsonText">
					Created by <span className="font-bold">Von Bonin</span> — Building
					side projects to inspire and empower creators.
				</footer>
			</div>

			<style jsx>{`
				@keyframes blink {
					50% {
						opacity: 0;
					}
				}
				.animate-blink {
					display: inline-block;
					animation: blink 1s infinite;
				}
			`}</style>
		</>
	)
}
