import "./Collapse.scss"
import arrowDown from "../../assets/arrow_down.png"
import PropTypes from 'prop-types';
import { useState } from "react";

function Collapse({ title, text }) {
    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="section_dropdowns">
            <div className="dropdown_header">
                <h3>{ title }</h3>
                <img src= { arrowDown } alt="Affichage du contenu" onClick={() => setIsOpen(!isOpen)} style={isOpen ? {transform : "rotate(180deg)"} : {}} />
            </div>
            <div className="p_dropdown" style={isOpen ? {display : "block"} : {display : "none"}}> { text } </div>
        </section>
    )
}

export default Collapse

Collapse.propTypes = {
    title : PropTypes.string,
    text : PropTypes.any
}

/* setIsOpen(!isOpen) */