import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "description"},
        {id: 2, title: "Javascript 2", body: "description"},
        {id: 3, title: "Javascript 3", body: "description"},
    ])

  return (
    <div className="App">
       <PostList posts={posts} title="Список постов 1."/>
    </div>
  )
}

export default App
