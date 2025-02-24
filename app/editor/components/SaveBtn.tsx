'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

export default function SaveBtn({ text }: { text: string }) {
	// Save the content as a .txt file
	const handleSave = () => {
		const blob = new Blob([text], { type: 'text/plain' })
		const url = URL.createObjectURL(blob)
		const a = document.createElement('a')
		a.href = url
		a.download = 'zen-text-editor.txt'
		a.click()
		URL.revokeObjectURL(url)
	}

	return (
		<button
			onClick={handleSave}
			className=" text-white p-4 rounded-full opacity-50 hover:opacity-100 transition-opacity"
			title="Save"
		>
			<FontAwesomeIcon icon={faSave} className="fas fa-save fa-2x" />
		</button>
	)
}
