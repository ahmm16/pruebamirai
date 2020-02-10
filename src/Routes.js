import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { withRouter } from "react-router";

import {
	HomePage,
} from './pages';

const Routes = () => {
	return (
		<Switch>
			<Route
				exact
				path="/"
				component={HomePage}
			/>
			<Route
				exact
				path="/autores"
				component={HomePage}
			/>
			<Redirect to="/" />
		</Switch>
	);
};

export default withRouter(Routes)