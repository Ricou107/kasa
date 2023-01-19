import { useState } from 'react';
import dropdownArrow from '../../Assets/dropdownArrow.svg';
import './Collapse.css';

function Collapse({title, text}) {
    const [isOpen, updateOpen] = useState(false)

	return <section className='collapse'>
		<div className="title" onClick={() => updateOpen(!isOpen)}>{title}</div>
		<img src={dropdownArrow} alt='dropdownArrow' className={`dropdownArrow${isOpen ? " collapseOpen" : ""}`} onClick={() => updateOpen(!isOpen)}/>
        <div className={`text${isOpen ? " collapseOpen" : ""}`}>
			{typeof(text) === 'string' ? text : text.map((equipment) => <p key={equipment}>{equipment}</p>)}
		</div>
	</section>
}

export default Collapse;