import React from 'react';
import { render } from 'react-dom';
import MyTitle from './MyTitle';

const MyFirstComponent = function() {
  return (
    <div>
      <MyTitle title="House of Cards" color="rebeccapurple"></MyTitle>
      <MyTitle title="Orange is the New Black" color="mediumaquamarine"></MyTitle>
      <MyTitle title="Stranger Things" color="peru"></MyTitle>
    </div>
  );
};

render(<MyFirstComponent />, document.getElementById('app'));
