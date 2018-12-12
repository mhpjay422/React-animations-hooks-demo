import React from 'react';
import { Spring, config } from 'react-spring';

const Counter = () => {
  return (
    <Spring
      from={{ number: 0 }}
      to={{ number: 1000000000000000}}
      delay= '2000'
      config= { config.molasses }>
        {props =>
          <div>
            {props.number.toFixed()}
          </div>
        }
    </Spring>
  )
}

export default Counter;