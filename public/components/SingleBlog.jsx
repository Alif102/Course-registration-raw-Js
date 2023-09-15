import PropTypes from 'prop-types'
import {FaBookmark} from 'react-icons/fa'
const SingleBlog = ({blogProps, handleBookMarks}) => {
    console.log(blogProps);
    const {title,reading_time} = blogProps;
  return (
    <div className='bg-gray-200 flex flex-col rounded-md p-5 m-5 '>
      <h2>{title}</h2>
      <div>
        <h2>{reading_time} min ago</h2>
        <button onClick={()=> handleBookMarks(blogProps)}><FaBookmark/></button>

      </div>
    </div>
  )
}
SingleBlog.propTypes = {
    blogProps: PropTypes.object.isRequired,
    handleBookMarks: PropTypes.func
}
export default SingleBlog