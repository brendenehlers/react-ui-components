import React from 'react'

import "./styles.css"

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const Button: React.FC<React.PropsWithChildren<Props>> = ({ children, onClick }) => {

  return <div className="button"><button className='content' onClick={onClick}>{children}</button></div>
}

export default Button