import React from 'react'
import "./_button.scss"

const Button = ({title, popup, children}) => {
	return (
		<a href="#popup" className="btn btn--white btn--animated">{children}</a>            
	)
}

export default Button;
