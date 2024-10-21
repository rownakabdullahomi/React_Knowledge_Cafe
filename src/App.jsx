import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookMarks] = useState([]);

  const handleAddToBookMark = blog =>{
    console.log("Adding BM");
  }

  return (
    <div className='w-11/12 mx-auto'>
      <Header></Header>
      <div className='md:flex'>
        <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>

    </div>
  )
}

export default App
