import PropTypes from 'prop-types';
import "./Tag.scss"

function Tag(props) {
    return <p className='tagName'>{props.tagName}</p>
}

export default Tag

Tag.propTypes = {
    tagName : PropTypes.string,
}