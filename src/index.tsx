//other import
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
//styles
import './resetScss/reset.scss';
//my components
import {App} from './components/App';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

