'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function ResetBtn({
	setText,
}: {
	setText: (t: string) => void
}) {
	// Reset the content of the textarea
	const handleReset = () => {
		setText('')
	}

	return (
		<button
			onClick={handleReset}
			className="text-white p-4 rounded-full opacity-50 hover:opacity-100 transition-opacity"
			title="Reset"
		>
			<FontAwesomeIcon icon={faTrash} className="fas fa-trash fa-2x" />
		</button>
	)
}
