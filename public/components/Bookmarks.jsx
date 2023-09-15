import PropTypes from 'prop-types'
import Bookmaark from './Bookmaark'
const Bookmarks = ({bookmarks}) => {
  return (
    <div>
        <h3 className='text-3xl'> Bookmarks : {bookmarks.length}</h3>
        {
            bookmarks.map((bookmark,idx) => <Bookmaark key={idx} 
            bookmarkProps={bookmark} />)
        }

    </div>
  )
}
Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired
   
}

export default Bookmarks