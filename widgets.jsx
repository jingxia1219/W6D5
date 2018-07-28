import React from 'react';
import ReactDOM from 'react-dom';

import Congrats from './congrats';
import Clock from './frontend/clock';
import Tab from './frontend/tabs';

function Root() {
  return (
    <div class="root">
    <Clock/>
    <Congrats/>
    </div>
);
}


document.addEventListener("DOMContentLoaded", () => {
	// const root = document.getElementById("root");
	ReactDOM.render(<Root/>, document.getElementById('root'));
  
});
