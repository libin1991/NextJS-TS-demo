import * as React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout: React.FunctionComponent = ({ children }) => (
  <div>
    <Head>
      <title>NextJS Demo 👋</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/favicon.ico"
      />
    </Head>
    <Navbar />
    <section>{children}</section>
  </div>
);

export default Layout;
