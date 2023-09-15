
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'

function BlogApp() {
 const [bookmarks, setBookmarks] = useState([]);

 const handleBookMarks = (blogHandle) => {
  const newBookmarks = [...bookmarks,blogHandle];
  setBookmarks(newBookmarks);

 }

  return (
    <>
      
      <h1>Blogs</h1>
      <Blogs handleBookMarks={handleBookMarks}></Blogs>
      <Bookmarks bookmarks={bookmarks} />
      
    </>
  )
}

export default BlogApp
