import React from 'react';

export const Home = props => {
	var comp = props.route.children,
		color = props.route.color;

  var styles = {
    backgroundColor: "black",
    width: '100%', 
    height: '100%'
  };

  return (
    <div style={styles}>
		{props.children}      
    </div>
  );
}

