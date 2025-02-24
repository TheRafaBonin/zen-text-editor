'use client'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function ThemeBtn() {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

	// Toggle between light and dark theme
	const handleTheme = () => {
		const newDarkMode = !isDarkMode
		document.body.classList.toggle('dark', newDarkMode)
		setIsDarkMode(newDarkMode)
		localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
	}

	useEffect(() => {
		// Check localStorage for saved theme preference or default to dark
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme === 'dark') {
			document.body.classList.add('dark')
			setIsDarkMode(true)
		} else {
			// If there's no saved theme, default to dark
			document.body.classList.add('dark')
			setIsDarkMode(true)
			localStorage.setItem('theme', 'dark') // Save the default theme as dark
		}
	}, [])

	return (
		<button
			onClick={handleTheme}
			className="text-white p-4 rounded-full opacity-50 hover:opacity-100 transition-opacity"
			title="Toggle Theme"
		>
			{isDarkMode ? (
				<FontAwesomeIcon icon={faMoon} className="fas fa-moon" />
			) : (
				<FontAwesomeIcon icon={faSun} className="fas fa-sun" />
			)}
		</button>
	)
}
