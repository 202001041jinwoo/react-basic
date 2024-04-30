import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/BlogPage.css';
import Card from '../components/Card';
import Pagination from '../components/Pagination';


function BlogSection({ posts, onDelete }) {
    const navigate = useNavigate();
    const navigateTo = (url) => {
        window.location.href = url;
    };
    const [currentPage, setCurrentPage] = useState(1);
    const [postsState, setPostsState] = useState(posts);
    const postsPerPage = 7;
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
 
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleCardClick = (post) => {
        const updatedPosts = postsState.map(p => {
            if (p.id === post.id) {
                return { ...p, views: p.views + 1 };
            }
            return p;
        });
        setPostsState(updatedPosts);
        navigate(`/blogs/${post.id}`);
    };

    useEffect(() => {
        setPostsState(posts);
    }, [posts]);

    return (
        <div className="blog-container">
            <img src="/main-image.png" alt="Main Content Image" className="header-image" />
            <Link to="/blogs/create" className="btn btn-success my-3">생성</Link>
            <div className="posts-overlay-container">
                <img src="main2-img.png" alt="Additional Content Image" />
                <div className="posts-content">
                    {currentPosts.length > 0 ? (
                        currentPosts.map((post, index) => (
                            <Card 
                                order = {indexOfFirstPost + index + 1}
                                key={post.id} 
                                title={post.title}
                                body={post.body}
                                date={post.date}
                                views={post.views}
                                onClick={() => handleCardClick(post)}
                            >
                                <div>
                                    <button 
                                        className="btn btn-danger btn-sm"
                                        onClick={(e) => onDelete(e, post.id)}
                                    >
                                        삭제
                                    </button>
                                </div>
                            </Card>
                        ))
                    ) : (
                        <div>No Blog Posts Found</div>
                    )}
                </div>
                
            </div>
            <div>
                <Pagination paginate={paginate} currentPage={currentPage} totalPages={totalPages} />
            </div>
            <aside>
                <button className="sidebar-box" onClick={() => navigateTo('https://www.hufs.ac.kr/hufs/index.do')}>
                    <h2>학교 홈피</h2>
                </button>
                <button className="sidebar-box" onClick={() => navigateTo('https://ice.hufs.ac.kr/sites/ice/index.do')}>
                    <h2>학과 홈피</h2>
                </button>
            </aside>
            <div>
           
            </div>
        </div>
    );
}

export default BlogSection;
