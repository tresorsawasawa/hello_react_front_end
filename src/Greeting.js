import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getHelloDispatcher } from './helloworld/hello';

const HelloWorld = () => {
  const dispatch = useDispatch();

  const greet = useSelector((state) => state.helloReducer.greeting || '');

  const handleClick = () => {
    dispatch(getHelloDispatcher());
  };

  return (
    <>
      <h1>
        Greeting:
        {' '}
        {greet}
      </h1>
      <button type="submit" className="helloBtn" onClick={handleClick}>
        Get Greeting Randomly
      </button>
    </>
  );
};

export default HelloWorld;
