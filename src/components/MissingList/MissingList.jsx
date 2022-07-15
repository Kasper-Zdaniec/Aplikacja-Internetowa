import React from 'react';
import { Link } from 'react-router-dom';

export interface Dog {
  url?: string;
}

export interface DogsListProps {
  dogs?: Dog[];
}

export default function MissingList({ dogs }: React.PropsWithChildren<DogsListProps>) {
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
          return (
            <Link key={dog.id} to={`/dogsMissing/${dog.id}`}>
              <img
                key={dog.id}
                src={dog.url}
                style={{
                  width: '19rem',
                  height: '19rem',
                  flex: 'auto',
                  margin: '10px',
                  borderRadius: '2rem'
                }}
              />
            </Link>
          );
        })}
    </div>
  );
}
