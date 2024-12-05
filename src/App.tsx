import { useEffect, useRef, useState } from 'react'
import './App.css'

const hideSpoilers: string[] = []

function App() {
	const [spoilers, setSpoilers] = useState(hideSpoilers)
	const iframeRef = useRef<HTMLIFrameElement>(null)
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		document.body.querySelectorAll('ytd-video-renderer').forEach((item) => {
	// 			;(item as HTMLElement).style.opacity = '20%'
	// 		})
	// 	}, 5000)
	// }, [])

	useEffect(() => {
		if (spoilers.length > 0) {
			localStorage.setItem('no-spoilers-config', JSON.stringify(spoilers))
		}
		// if ((JSON.parse(localStorage.getItem('no-spoilers-config') ?? '[]') as string[]).length === 0) {
		// } else return
		// iframeRef.current!.contentWindow?.postMessage(
		// 	JSON.stringify(localStorage.getItem('no-spoilers-config')),
		// 	'https://www.youtube.com/embed/'
		// )
	}, [spoilers])

	useEffect(() => {
		setSpoilers(JSON.parse(localStorage.getItem('no-spoilers-config') ?? '[]'))
		// localStorage.setItem('no-spoilers-config', JSON.stringify(spoilers))
		// if ((JSON.parse(localStorage.getItem('no-spoilers-config') ?? '[]') as string[]).length === 0) {
		// } else return
	}, [])

	return (
		<main>
			<div>
				<input
					id='inp'
					type='text'
				/>
				<button
					onClick={() => {
						setSpoilers([...spoilers, (document.getElementById(`inp`) as HTMLInputElement).value])

						// iframeRef.current!.contentWindow?.postMessage(
						// 	JSON.stringify(localStorage.getItem('no-spoilers-config')),
						// 	'https://www.youtube.com/embed/'
						// )
					}}>
					done
				</button>
				{/* {
					hideSpoilers.map((spoiler, i) => (
						<div key={i}>
						</div>
					))
				} */}
			</div>
			<iframe
				ref={iframeRef}
				src='https://www.youtube.com/embed/'
				onLoad={() => {
					setTimeout(() => {
						iframeRef.current?.contentWindow?.postMessage(
							// JSON.stringify(localStorage.getItem('no-spoilers-config')),
							// ['test', 'yo'],
							// JSON.parse(localStorage.getItem('no-spoilers-config') ?? 'null'),
							'this is a test',
							'https://www.youtube.com/*'
						)
					}, 5000)
				}}></iframe>
		</main>
	)
}

// export type Spoiler = (
// 	| {
// 			by: 'views (max)'
// 			max?: number
// 	  }
// 	| {
// 			by: 'views (min)'
// 			min?: number
// 	  }
// 	| {
// 			by: 'words'
// 			words: string[] | string
// 	  }
// 	| {
// 			by: 'creator'
// 			words: string[] | string
// 	  }
// )

// type Spoiler = {
// 	word: string
// }

export default App
