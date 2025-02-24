import FullScreenBtn from './FullScreenBtn'
import HomeBtn from './HomeBtn'
import MusicBtn from './MusicBtn'
import ResetBtn from './ResetBtn'
import SaveBtn from './SaveBtn'

export default function SideBar({
	text,
	setText,
}: {
	text: string
	setText: (t: string) => void
}) {
	return (
		<div className="h-full w-16 bg-[#22222222] flex flex-col justify-between items-center z-10 py-8">
			{/* Buttons at the top */}
			<div className="flex flex-col space-y-4">
				<FullScreenBtn />
				<SaveBtn text={text} />
				<ResetBtn setText={setText} />
			</div>

			{/* Home Button at the bottom */}
			<div className="mt-auto flex flex-col space-y-4">
				<MusicBtn />
				<HomeBtn />
			</div>
		</div>
	)
}
