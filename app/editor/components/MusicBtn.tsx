'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

export default function MusicBtn() {
	// Music the content of the textarea
	const handleClick = () => {
		alert('Coming soon!')
	}

	return (
		<button
			onClick={handleClick}
			className="text-white p-4 rounded-full opacity-50 hover:opacity-100 transition-opacity"
			title="Music"
		>
			<FontAwesomeIcon icon={faMusic} className="fas fa-music fa-2x" />
		</button>
	)
}
