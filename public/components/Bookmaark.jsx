
import PropTypes from 'prop-types'

const Bookmaark = ({bookmarkProps}) => {
    const {title} = bookmarkProps;
  return (
    <div>
        <h2>{title}</h2>

    </div>
  )
}
Bookmaark.propTypes = {
    bookmarkProps: PropTypes.object.isRequired
   
}

export default Bookmaark