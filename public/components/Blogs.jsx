import { useState , useEffect} from "react"
import PropTypes from 'prop-types'
import SingleBlog from "./SingleBlog";
const Blogs = ({handleBookMarks}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('Blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
      
    } ,[])
  return (
    <div>
      <h1>Blogs : {blogs.length}</h1>
      {
        blogs.map((blog, idx) => <SingleBlog key={idx} 
        handleBookMarks={handleBookMarks}
        blogProps={blog}></SingleBlog>)
      }
         
         


    </div>
  )
}
Blogs.propTypes = {
  handleBookMarks: PropTypes.func
}

export default Blogs