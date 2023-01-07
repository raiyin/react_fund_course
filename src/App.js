import React, { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {

    const [posts, setPosts] = useState([
        { id: 1, title: "hh", body: "aa" },
        { id: 2, title: "bb", body: "tt" },
        { id: 3, title: "cc", body: "yy" },
    ]);

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const sortedPosts = useMemo(() => {
        console.log("SelectedSort");
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        else {
            return posts;
        }
    }, [selectedSort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(searchQuery));
    }, [searchQuery, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    };

    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr style={{ margin: '15px 0' }} />
            <div>
                <MyInput
                    placeholder='Поиск...'
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка"
                    options={[
                        { value: 'title', name: 'По названию' },
                        { value: 'body', name: 'По описанию' }
                    ]}
                />
            </div>
            {sortedAndSearchedPosts.length
                ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1." />
                : <h1 style={{ textAlign: 'center' }}> Посты не найдены</h1>
            }

        </div >
    );
}

export default App;
