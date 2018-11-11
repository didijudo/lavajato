import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home';
import Top from './component/Top';
import Login from './component/Login';
import NewClient from './component/NewClient';
import NewService from './component/NewService';
import NewClientService from './component/NewClientService';
import EditClient from './component/EditClient';
//import EditService from './component/EditService';
import NoMatch from './component/NoMatch';
import {Container} from 'semantic-ui-react';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailClient from './component/DetailClient';

ReactDOM.render(
	<BrowserRouter>
		<Container>
			<Top />
			<Switch>
				{/*<Route path="/" exact={true} component={Login} /> */}
				<Route path="/" exact={true} component={Home} />
				<Route path="/client/new" exact={true} component={NewClient} />
				<Route path="/service/new" exact={true} component={NewService} />
				<Route path="/wash/:clientId/" exact={true} component={NewClientService} />
				<Route path="/edit/:clientId/" exact={true} component={EditClient} /> 
				{/*<Route path="/service/edit/:serviceId/" exact={true} component={EditService} />*/}
				<Route path="/detail/:clientId/" exact={true} component={DetailClient} />
				<Route component={NoMatch} />
			</Switch>
		</Container>
	</BrowserRouter>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
