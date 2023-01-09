import React, { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/UI/PostFilter';

function App() {

    const [posts, setPosts] = useState([
        { id: 1, title: "hh", body: "aa" },
        { id: 2, title: "bb", body: "tt" },
        { id: 3, title: "cc", body: "yy" },
    ]);

    const [filter, setFilter] = useState({ sort: '', query: '' });

    const sortedPosts = useMemo(() => {
        console.log("SelectedSort");
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        else {
            return posts;
        }
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query));
    }, [filter.query, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1." />

        </div >
    );
}

export default App;
