import React from 'react';

const Button = props => {
	return (
		<button {...props} className='flex bg-red-300 hover:bg-red-500 hover:shadow-lg p-2 rounded'>
			{props.children}
		</button>
	);
};

export default Button;
