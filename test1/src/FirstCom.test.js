import React from 'react';
import ReactDOM from 'react-dom';
import FirstCom from './FirstCom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FirstCom />, div);
  ReactDOM.unmountComponentAtNode(div);
});
