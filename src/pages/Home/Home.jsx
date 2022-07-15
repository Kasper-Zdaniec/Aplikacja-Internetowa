import React from 'react';
import Layout from '../../components/Layout/Layout';
import SearchForm from '../../components/SearchForm/SearchForm';
import DogsList from '../../components/DogsList/DogsList';
import useFetch from '../../hooks/useFetch';

export default function Home() {
  const { data, error, isPending } = useFetch('http://localhost:8000/adoptions');
  const [searchParams, setSearchParams] = React.useState(null);

  return (
    <Layout title="Strona główna">
      {!error && !isPending && (
        <>
          <SearchForm setSearchParams={setSearchParams} />
          <DogsList dogs={data} searchParams={searchParams} />
        </>
      )}
    </Layout>
  );
}
