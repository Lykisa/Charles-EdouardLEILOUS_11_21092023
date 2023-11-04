import PropTypes from 'prop-types';
import "./Rating.css"

function Rating(props) {
    const tableau = [1,2,3,4,5];

    return <>{ tableau.map((chiffre, index) => {
        return (chiffre <= parseInt(props.rating)) ? <span className="fa-solid fa-star full" key={index}></span> : <span className="fa-solid fa-star empty" key={index}></span>}) }</>
}

export default Rating

Rating.propTypes = {
    rating : PropTypes.string,
}
