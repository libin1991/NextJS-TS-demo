import * as React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import BreedSelect from '../components/BreedSelect';
import '../styles/main.scss';

const Index: React.FunctionComponent = (props: any) => {
  return (
    <Layout>
      <h1>Hello Next.js 👋</h1>
      <BreedSelect breeds={props.listOfBreeds} />
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await res.json();
  const listOfBreeds = Object.keys(data.message);
  return {
    listOfBreeds,
  };
};

export default Index;
