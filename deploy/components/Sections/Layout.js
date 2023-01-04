import React from 'react';
import Head from 'next/head';

// Add dynamic CSS
const addStyleSheet = (path) => {
	if (typeof window === 'object') {
		var head = document.head;
		var link = document.createElement("link");

		link.type = "text/css";
		link.rel = "stylesheet";
		link.href = path;

		head.appendChild(link);
	}
}

// Layout
const Layout = (props) => {

	// Google web font
	addStyleSheet("https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,700");

	// Color schema
	addStyleSheet(props.colorSchema);

	return (
		<div>
			
			<Head>

				/* Meta */
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
        		<meta name="description" content="Complete description of the content showed in this sample page." />
        		<meta property="og:title" content="Miért Mozgásműhely Pécs"/>
        		<meta property="og:description" content="Miért Mozgásműhely, privát személyi edzés Pécs. Frei Judit személyi edző. Táplálkozási tanácsadás. Egyéni mozgásterápia. Barbakán Tér 1/A. Pécs." />
        		<meta property="og:url" content="https://miertmozgasmuhely.hu/" />
        		<meta property="og:type" content="website" />
				/* Title */
				<title>{props.pageTitle}</title>

				/* Favicon */
				<link rel="icon" href="/images/favicon.ico" type="image/x-icon" />

			</Head>

			{props.children}

		</div>
	);
}

export default Layout;