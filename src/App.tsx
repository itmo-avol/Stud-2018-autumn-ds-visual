import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ROUTES } from './services/routes';
import { Header } from './components/header';
import * as Pages from './pages';
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<div className="page">
				<Header />
				<main className="page__container">
					<Route exact path={ROUTES.HOME} component={Pages.HomePage} />
					<Route exact path={ROUTES.ALGS_AND_DS} component={Pages.GalleryPage} />
					<Route path={ROUTES.ABOUT} component={Pages.AboutPage} />
					<Route path={ROUTES.VISUAL} component={Pages.VisualizationPage} />
					<Route path={ROUTES.INFO} component={Pages.InfoPage} />
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;
