'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'

export default function FullScreenBtn() {
	// Toggle between full screen and normal screen
	const toggleFullScreen = () => {
		if (document.fullscreenElement) {
			document.exitFullscreen()
		} else {
			document.documentElement.requestFullscreen()
		}
	}

	return (
		<button
			onClick={toggleFullScreen}
			className="text-white p-4 rounded-full opacity-50 hover:opacity-100 transition-opacity"
			title="Toggle Full Screen"
		>
			<FontAwesomeIcon icon={faExpand} className="fas fa-expand fa-2x" />
		</button>
	)
}
