import * as React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import '../styles/main.scss';

const Index: React.FunctionComponent = (props: any) => {
  return (
    <Layout>
      <h1>Hello Next.js 👋</h1>
      <p>{props.data.message}</p>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await res.json();
  return {
    data,
  };
};

export default Index;
