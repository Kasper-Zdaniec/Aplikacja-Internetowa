import React from 'react';
import Layout from '../../components/Layout/Layout';
import MissingList from '../../components/MissingList/MissingList';
import useFetch from '../../hooks/useFetch';

export default function Missing() {
  const { data, error, isPending } = useFetch('http://localhost:8000/missing');
  console.log(error);
  console.log(isPending);
  return (
    <Layout title="Strona główna">
      <MissingList dogs={data} />
    </Layout>
  );
}
