import React from 'react';

const MyTitle = function(props) {
const style = { color: props.color };
  return (
    <div>
      <h1 style={style}>{props.title}</h1>
    </div>
  );
};
export default MyTitle;
