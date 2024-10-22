import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookMark = blog =>{
    setBookMarks([...bookmarks, blog])
  }

  const handleMarkAsRead = (id, time) =>{
    setReadingTime(readingTime + time);
    // Remove from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(remainingBookmarks);
  }

  return (
    <div className='w-11/12 mx-auto'>
      <Header></Header>
      <div className='md:flex pt-4'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookMark={handleAddToBookMark}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </div>
  )
}

export default App
