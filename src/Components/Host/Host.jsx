import './Host.css'

function Host({name, picture}) {
	return (
	<div className='Host'>
        <p className='name'>{name}</p>
        <img src={picture} alt='host-img' className='host-picture'/>
	</div>
	)
}

export default Host