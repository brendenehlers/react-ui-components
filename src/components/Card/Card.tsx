import React from 'react'
import './styles.css'

const Card: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <section className='card'>{children}</section>
}

export default Card
