import React from 'react';
import Typewriter from 'typewriter-effect';
import { greeting } from '../../portfolio';

function Type() {
  return (
    <Typewriter
      options={{
        strings: greeting.subTitle,
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
}

export default Type;
