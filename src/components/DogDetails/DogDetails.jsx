import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';
import Layout from '../../components/Layout/Layout';

const DogDetails = () => {
  const { id } = useParams();
  const { data: dog } = useFetch('http://localhost:8000/adoptions/' + id);

  return (
    <Layout title="Dane psa">
      {dog && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50px',
            background: 'rgba(0, 0, 0, .5)',
            color: 'white',
            fontSize: '40px',
            fontWeight: '700',
            width: '100%',
            gap: '50px',
            flexDirection: 'column'
          }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              color: 'white',
              fontSize: '40px',
              fontWeight: '700',
              width: '100%',
              gap: '50px'
            }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '20px',
                width: '420px'
              }}>
              <div>Imię: {dog.name}</div>
              <div>Wiek: {dog.age}</div>
              <div>Miasto: {dog.city}</div>
              <div>Płeć: {dog.sex}</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '20px',
                width: '420px'
              }}>
              <div>Rasa: {dog.breed}</div>
              <div>Wielkość: {dog.size}</div>
              <div>Opis: {dog.description}</div>
              <div>Sterylizacja/kastracja: {dog.sterilization ? 'Tak' : 'Nie'}</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '20px',
                width: '420px'
              }}>
              <div>Szczepiony: {dog.vaccivations ? 'Tak' : 'Nie'}</div>
              <div>Przyjazny dzieciom: {dog.friendly ? 'Tak' : 'Nie'}</div>
              <div>Szkolony: {dog.trained ? 'Tak' : 'Nie'}</div>
              <div>Uwielbia zabawę: {dog.playful ? 'Tak' : 'Nie'}</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '20px',
                width: '200px'
              }}>
              <div>Uwielbia spacery: {dog.walks ? 'Tak' : 'Nie'}</div>
              <div>Akceptuje psy: {dog.anotherDogs ? 'Tak' : 'Nie'}</div>
              <div>Akceptuje koty: {dog.anotherCats ? 'Tak' : 'Nie'}</div>
            </div>
          </div>
          <img style={{ width: '300px', height: '300px' }} src={dog.url} />
        </div>
      )}
    </Layout>
  );
};

export default DogDetails;
