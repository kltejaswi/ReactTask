
import React from 'react';
import ReactDOM from 'react-dom'; // I don't understand why this needs to be separate from the render import, but it breaks if it isn't
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, useRouterHistory  } from 'react-router';
import { createHistory } from 'history';
import { LoginPageComponent } from './components/login.jsx';
import { Home } from './components/home.jsx';
import { Provider } from 'react-redux'
import Header from './components/header/header.jsx'
import request from './components/expressions/request.jsx'

import store, { history } from './store';
import {CheckboxField} from "./components/expressions/checkbox.jsx";
import ConfirmList from "./components/expressions/confirmList.jsx";

const appHistory = useRouterHistory(createHistory)({
  basename: "/Home"
});

ReactDOM.render((
	<Provider store={store}>
	<Router history={appHistory}>
		<Route path="/" component={request}>
			<IndexRoute component={CheckboxField}/>
			<Route path="/" component={request} />
		</Route>
		<Route path="/confirmList" component={ConfirmList}>
			<IndexRoute component={ConfirmList}/>
			<Route path="/" component={ConfirmList} />
		</Route>
	</Router>
		</Provider>
), document.getElementById('app')); 