'use client'

import { useState, useRef, useEffect } from 'react'
import SideBar from './components/SideBar'
import TextEditor from './components/TextEditor'

export default function Editor() {
	const [text, setText] = useState<string>('')
	const [showSidebar, setShowSidebar] = useState<boolean>(false)

	// Reference for the textarea
	const textareaRef = useRef<HTMLTextAreaElement | null>(null)

	// Handle the input in the textarea
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value)
		setShowSidebar(false) // Hide sidebar when text changes
	}

	// Handle mouse move event to show the sidebar
	const handleMouseMove = () => {
		setShowSidebar(true)
	}

	// Handle click event inside the textarea
	const handleTextareaClick = () => {
		setShowSidebar(false) // Hide sidebar on textarea click
	}

	useEffect(() => {
		const textareaElement = textareaRef.current

		// Event listener for mouse movement to show sidebar
		document.addEventListener('mousemove', handleMouseMove)

		// Prevent sidebar from showing when the textarea is clicked
		if (textareaElement) {
			textareaElement.addEventListener('click', handleTextareaClick)
		}

		// Cleanup on unmount
		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
			if (textareaElement) {
				textareaElement.removeEventListener('click', handleTextareaClick)
			}
		}
	}, [])

	return (
		<div className="flex justify-center items-center min-h-screen bg-[#121212] p-4">
			<TextEditor
				text={text}
				setText={setText}
				textareaRef={textareaRef}
				handleChange={handleChange}
			/>

			{/* Sidebar that will occupy the full right side */}
			<div
				className={`fixed top-0 right-0 h-full transition-transform duration-500 ease-in-out ${
					showSidebar ? 'transform translate-x-0' : 'transform translate-x-full'
				}`}
			>
				<SideBar text={text} setText={setText} />
			</div>

			{/* Disable text selection */}
			<style jsx>{`
				textarea {
					user-select: none;
				}
			`}</style>
		</div>
	)
}
