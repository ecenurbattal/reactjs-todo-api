import React from 'react';
import { Header } from './components/Header/Header';
import TodosListScreen from './screens/TodosListScreen';
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <TodosListScreen/>
    </>
  );
}

export default App;
