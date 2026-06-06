import { useState } from 'react'

import {General} from '../../CSS'
import { Nav } from './COMPONENTS/JSX/Nav'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
     <header>

      <Nav></Nav>

     </header>
    </>
  )
}

export default App
