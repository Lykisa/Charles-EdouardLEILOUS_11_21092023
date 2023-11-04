import { useState } from "react";
import PropTypes from 'prop-types';
import "./Slideshow.css"
import arrowLeft from "../../assets/arrow_left.png"
import arrowRight from "../../assets/arrow_right.png"
/* let index = 0 */

function Slideshow({ pictures }) {
  let [reload ,setReload] = useState(0)

  function next() {
    /* setReload(reload++) */
    if (reload == pictures.length - 1) 
      setReload(0); 
    else 
      setReload(reload+1)
    /* setReload(index) */
  }
  function prev() {
    /* setReload(reload--) */
    if (reload == 0) 
      setReload(pictures.length - 1); 
    else 
      setReload(reload-1)
    /* setReload(index) */
  }

  function showArrows() {
    return (
      <div className="navigation">
        <img src={arrowLeft} className="arrowLeft" onClick={prev} alt="Précédente"/>
        <p>{reload + 1}/{pictures.length}</p>
        <img src={arrowRight} className="arrowRight" onClick={next} alt="Suivante"/>
      </div>
    )
  }
  console.log(reload)
  return (
    <div
      className="slider"
      style={{
        backgroundImage: `url("${pictures[reload]}")`,
      }}
    >
      {pictures.length > 1 ? showArrows() : ""}
    </div>
  )
}

export default Slideshow

Slideshow.propTypes = {
    pictures : PropTypes.array
}