import { useState } from 'react'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'

const App = () => {
  const [category,setcategory]=useState("general")
  return (
    <div>
      <Navbar setcategory={setcategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App