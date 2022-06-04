import React from 'react';
import ReactDOM from 'react-dom';
import MovieState from './context/MovieState';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollWrapper from './ScrollWrapper';

ReactDOM.render(
	<React.StrictMode>
		<MovieState>
			<BrowserRouter>
				<ScrollWrapper>
					<App />
				</ScrollWrapper>
			</BrowserRouter>
		</MovieState>
	</React.StrictMode>,
	document.getElementById('root')
);
