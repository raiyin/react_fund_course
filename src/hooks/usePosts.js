import { useMemo } from "react";

export function useSortedPosts(posts, sort) {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts]);
    return sortedPosts;
};

export default function usePosts(post, sort, query) {
    const sortedPosts = useSortedPosts(post, sort);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(query));
    }, [query, sortedPosts]);
    return sortedAndSearchedPosts;
};
