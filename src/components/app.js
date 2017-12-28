import React from 'react';
import ErrorBoundary from './ErrorBoundary.jsx';
import Graph1 from './Graph1.jsx';
import '../styles/app.css';

export default function app() {
	return (
		<div>
			<h1>JSX</h1>
			<div>JSX span!!</div>
			<ErrorBoundary>
				<span>
					<Graph1 graph="graph1" GraphNumber="1" data={[5,10,1,3]} size={[500,500]}></Graph1>
				</span>
			</ErrorBoundary>
			<ErrorBoundary>
				<span>
					<Graph1 graph="graph2" GraphNumber="2" data={[15,10,56,23]} size={[500,500]}></Graph1>
				</span>
			</ErrorBoundary>
		</div>
	)
};
