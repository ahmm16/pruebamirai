import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import './assets/scss/index.scss';
import Routes from './Routes';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {
	Header,
	Footer,
} from './components/common'
const browserHistory = createBrowserHistory();

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Container maxWidth="lg">
					<Header />
					<Grid container direction="row" justify="center" className="backgroundGrey">
						<Router history={browserHistory}>
							<Grid item xs={12} className="paddingContainer">
								<Routes />
							</Grid>
						</Router>
						<Footer />
					</Grid>
				</Container>
			</ThemeProvider>
		);
	}
}
export default App
