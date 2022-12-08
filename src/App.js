import React, { useState } from 'react';
import Counter from "./components/Counter";
import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostItem from './components/PostItem';

function App() {
    const [value, setValue] = useState('Text in the input')

  return (
    <div className="App">
        <PostItem post={{id: 1, title: "Javascript", body: "description"}}/>
        <PostItem post={{id: 2, title: "Javascript", body: "description"}}/>
        <PostItem post={{id: 3, title: "Javascript", body: "description"}}/>
    </div>
  )
}

export default App
