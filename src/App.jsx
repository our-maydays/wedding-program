import './App.css'

import Intersect from './Intersect'
import WeddingProgram from './WeddingProgram'

function App() {

	const debug = process.env.NODE_ENV === 'development'?'solid':'none';

	return (

			<div id='wedding-program'>

				<div className='main-frame'>

					<Intersect className='fade-in'>
						<WeddingProgram/>
					</Intersect>

				</div>

			</div>
	)
}

export default App
