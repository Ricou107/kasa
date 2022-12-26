import { useState } from 'react';
import './Collapse.css';

function Collapse({title, text}) {
    const [isOpen, updateOpen] = useState(false)


	return <section className='collapse'>
		<div className="title" onClick={() => updateOpen(!isOpen)}>{title}</div>
        <div className={`text${isOpen ? " collapseOpen" : ""}`}>{text}</div>
	</section>
}

export default Collapse;