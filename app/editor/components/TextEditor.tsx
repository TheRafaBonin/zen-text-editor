import { useEffect } from 'react'

export default function TextEditor({
	text,
	setText,
	textareaRef,
	handleChange,
}: {
	text: string
	setText: (t: string) => void
	textareaRef: React.RefObject<HTMLTextAreaElement | null>
	handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}) {
	// Load saved text from localStorage on the first render
	useEffect(() => {
		const savedText = localStorage.getItem('text-editor-content')
		if (savedText) {
			setText(savedText)
		}
	}, [setText]) // This effect runs once on mount

	// Save text to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem('text-editor-content', text)
	}, [text]) // This effect runs whenever `text` changes

	// Handle the input in the textarea
	const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value)
		handleChange(e)
	}

	// Resize the textarea height based on content, up to max-h-32
	useEffect(() => {
		const textarea = textareaRef.current
		if (textarea) {
			// Reset height to auto before measuring
			textarea.style.height = '2.5em'
			const scrollHeight = textarea.scrollHeight
			if (scrollHeight < 64) {
				textarea.style.height = `${Math.min(
					textarea.scrollHeight * 0.5,
					128
				)}px`
			} else {
				// Set the height to scrollHeight, but respect max height
				textarea.style.height = `${Math.min(textarea.scrollHeight, 128)}px`
			}
		}
	}, [text]) // Effect runs every time text changes

	// Effect to set caret position at the end after text is updated
	useEffect(() => {
		const textarea = textareaRef.current
		if (textarea) {
			// Set the caret position to the end after text is updated
			const length = textarea.value.length
			textarea.setSelectionRange(length, length)
		}
	}, [text]) // Effect runs every time text changes

	// Force caret to stay at the end during user interactions
	const handleKeyUp = () => {
		const textarea = textareaRef.current
		if (textarea) {
			// Ensure caret stays at the end after any key press
			const length = textarea.value.length
			textarea.setSelectionRange(length, length)
		}
	}

	const handleFocus = () => {
		const textarea = textareaRef.current
		if (textarea) {
			// Set caret to the end when textarea gains focus
			const length = textarea.value.length
			textarea.setSelectionRange(length, length)
		}
	}

	// Prevent the default behavior of Ctrl + A (Select All)
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.ctrlKey && e.key === 'a') {
				e.preventDefault() // Prevent the default select all behavior
			}
		}

		const textarea = textareaRef.current
		if (textarea) {
			textarea.addEventListener('keydown', handleKeyDown)
		}

		// Clean up event listener on component unmount
		return () => {
			if (textarea) {
				textarea.removeEventListener('keydown', handleKeyDown)
			}
		}
	}, [textareaRef]) // This effect will run when the component mounts

	return (
		<div className="relative w-full max-w-2xl h-12">
			{/* Overlay */}
			<div className="absolute inset-0 bg-opacity-40 mt-[-4.5em] z-10 pointer-events-none">
				<div className="h-6 bg-[#121212] bg-opacity-80"></div>
				<div className="h-8 bg-[#121212] bg-opacity-60"></div>
				<div className="h-8 bg-[#121212] bg-opacity-30"></div>
			</div>

			{/* Main textarea for typing the current line */}
			<textarea
				ref={textareaRef}
				value={text || ''}
				onChange={handleInput}
				onFocus={handleFocus} // Force caret to the end on focus
				onKeyUp={handleKeyUp} // Force caret to the end on key press
				className="w-full break-words bg-[#121212] h-6 text-white text-xl sm:text-2xl focus:outline-none absolute bottom-0 placeholder-gray-400 overflow-hidden font-barlow"
				placeholder="Start creating..."
				autoFocus
				style={{
					resize: 'none', // Disable resizing by mouse
					border: 'none', // No borders
					overflow: 'hidden', // Hide overflow content
				}}
			/>
		</div>
	)
}
