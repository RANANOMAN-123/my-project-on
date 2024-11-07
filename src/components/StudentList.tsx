import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Head } from '../constant/constant';

const GET_STUDENTS = gql`
  query GetUsers {
    users {
      data {
        id
        name
        phone
      }
    }
  }
`;

function StudentList() {
  const { loading, error, data } = useQuery(GET_STUDENTS);

  if (loading) return <p>{Head.Loading}</p>;
  if (error) return <p>{Head.Error} {error.message}</p>;

  return (
    <div>
      {data.users.data.map((user: { id: string; name: string; phone: string }) => (
        <div key={user.id}>
          <h2>{Head.Id} {user.id}</h2>
          <h3>{Head.Name} {user.name}</h3>
          <p>{Head.Phone} {user.phone}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default StudentList;