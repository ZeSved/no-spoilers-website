import { useEffect, useState } from 'react'
import './App.css'

const hideSpoilers: string[] = []

function App() {
	const [spoilers, setSpoilers] = useState(hideSpoilers)
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		document.body.querySelectorAll('ytd-video-renderer').forEach((item) => {
	// 			;(item as HTMLElement).style.opacity = '20%'
	// 		})
	// 	}, 5000)
	// }, [])

	useEffect(() => {
		localStorage.setItem('no-spoilers-config', JSON.stringify(spoilers))
	}, [spoilers])

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
