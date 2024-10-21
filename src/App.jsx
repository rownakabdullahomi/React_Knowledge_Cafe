import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookMarks] = useState([]);

  const handleAddToBookMark = blog =>{
    setBookMarks([...bookmarks, blog])
  }

  return (
    <div className='w-11/12 mx-auto'>
      <Header></Header>
      <div className='md:flex pt-4'>
        <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>

    </div>
  )
}

export default App
