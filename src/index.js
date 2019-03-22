import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import rootStore from './redux/store/rootStore';

const store = rootStore();

ReactDOM.render(

<Provider store={store} >
<App />
</Provider>


, document.getElementById('root'));
