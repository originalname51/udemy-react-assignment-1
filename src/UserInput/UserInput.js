import React from 'react';

const userInput = (props) => {
    const style = {
        width: '50%',
        backgroundColor: 'tan',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        textAlign: 'center',
        margin: '0 auto'
    };
  return(
    <div style={style}>
        <input
            onChange={props.changed}
            value={props.username}/>
    </div>
  );
};

export default userInput;