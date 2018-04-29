import React from 'react';
import { render } from 'react-dom';
import Main from './components/main';

const App = () => <div><Main /></div>;

render(<App />, document.getElementById('app'));

module.hot.accept();
