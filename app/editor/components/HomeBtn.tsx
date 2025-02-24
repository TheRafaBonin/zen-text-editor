'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function HomeBtn() {
	// Home the content of the textarea
	const handleClick = () => {}

	return (
		<Link href="/">
			<button
				onClick={handleClick}
				className="text-white p-4 rounded-full opacity-50 hover:opacity-100 transition-opacity"
				title="Home"
			>
				<FontAwesomeIcon icon={faHome} className="fas fa-home fa-2x" />
			</button>
		</Link>
	)
}
