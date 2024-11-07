import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo-client';
import StudentList from './components/StudentList';
import './App.css';
import { Head } from './constant/constant';

function App() {
  return (
    <ApolloProvider client={client}>
           <StudentList />
    </ApolloProvider>
  );
}

export default App;
