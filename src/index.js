import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

// handleOtherClick = () => {
//   alert("AHHHHHH!")
// }
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={() => alert("ahhhhh!")} />
  </div>,
  document.getElementById('root')
  );