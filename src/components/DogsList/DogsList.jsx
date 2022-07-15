import React from 'react';
import { Link } from 'react-router-dom';

export interface Dog {
  url?: string;
}

export interface DogsListProps {
  dogs?: Dog[];
  searchParams?: any;
}

export default function DogsList({ dogs, searchParams }: React.PropsWithChildren<DogsListProps>) {
  const shouldDisplayDog = (dog, searchParam) => {
    let shouldDisplay = 'start';
    for (const key in searchParam) {
      if (searchParam[key]) {
        if (key == 'name' && shouldDisplay != 'no') {
          if (dog[key].toLowerCase().includes(searchParam[key].toLowerCase())) {
            shouldDisplay = 'yes';
          } else {
            shouldDisplay = 'no';
          }
        } else if (
          (dog[key] == searchParam[key] || searchParam[key] == 'Bez znaczenia') &&
          shouldDisplay != 'no'
        ) {
          shouldDisplay = 'yes';
        } else if (dog[key] != searchParam[key]) {
          shouldDisplay = 'no';
        }
      }
    }
    return shouldDisplay == 'yes' || shouldDisplay == 'start' ? true : false;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'auto',
        alignContent: 'start'
      }}>
      {dogs &&
        dogs.map((dog) => {
          if (searchParams !== null) {
            if (shouldDisplayDog(dog, searchParams))
              return (
                <Link key={dog.id} to={`/dogs/${dog.id}`}>
                  <img
                    key={dog.id}
                    src={dog.url}
                    style={{
                      width: '22rem',
                      height: '22rem',
                      margin: '12.75px',
                      borderRadius: '2rem'
                    }}
                  />
                </Link>
              );
          } else
            return (
              <Link to={`/dogs/${dog.id}`}>
                <img
                  key={dog.id}
                  src={dog.url}
                  style={{
                    width: '22rem',
                    height: '22rem',
                    margin: '12.75px',
                    borderRadius: '2rem'
                  }}
                />
              </Link>
            );
        })}
    </div>
  );
}
