import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import trendingReducer from './Store/reducers/trending';
import popularReducer from './Store/reducers/popular';
import {BrowserRouter } from 'react-router-dom';
import { createStore,applyMiddleware,combineReducers,compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const rootReducer      = combineReducers({
    trending    :   trendingReducer,
    popular     :   popularReducer,
});


const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
));

const app = <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
