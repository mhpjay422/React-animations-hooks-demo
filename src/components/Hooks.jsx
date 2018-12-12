import React from 'react';
import { useSpring, animated } from 'react-spring';

const HookedComponent = () => {

	const [props] = useSpring({
		marginTop: '30px',
		opacity: 1,
		color: 'white',
		from: { opacity: 0 },
		delay: '4000',
		fontSize: '70px'
	})

	return <animated.div style={props}>
			 Faded in with React Hooks
		   </animated.div>
	
}

export default HookedComponent;