import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import { Link, useNavigate } from 'react-router-dom'; // v6에서는 이렇게 임포트합니다.
const AdminPage = () => {
    const navigate = useNavigate(); // useHistory 대신 useNavigate를 사용합니다.
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPosts = () => {
        axios.get('http://localhost:3001/posts').then((response) => {
            setPosts(response.data);
            setLoading(false);
        });
    };
    const deleteBlog = (e, id) => {
        e.stopPropagation();
        axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
            setPosts(prevPosts => {
                return prevPosts.filter(post => {
                    return post.id !== id;
                })
            })
        });


    }

    useEffect(() => {
        getPosts();
    }, []);

    const renderBlogList = () => {
        if(loading) {
            return (
                <div className = "d-flex justify-content-center">
                    <div className = "spiner-border" role ="status">
                        <span className = "visually-hidden"> Loading...</span>
                    </div>
                </div> 
            );
        }
        if (posts.length ==0){
            return (<div>No Blog Posts</div>)
        }
        return posts.filter(post =>{
            return post.publish
            
        }).map(post => {
            return(
                <Card 
                    key={post.id} 
                    title={post.title} 
                    onClick={() => navigate(`/blogs/${post.id}`)} // v6에서는 navigate 함수를 사용하여 프로그래매틱 네비게이션을 합니다.
                >
                <div>
                    <button 
                    className = "btn btn-danger btn-sm"
                    onClick = {(e) => deleteBlog(e, post.id)}
                    >Delete</button>
                </div>
                </Card>
            )
        })
    }
    
    return (
        <div>
       {     <div className='d-flex justify-content-between'>
                <h1>Admin 정보통신공학과 익명게시판</h1>
                <div>
                    <Link to="/blogs/create" className="btn btn-success">
                        Create New
                    </Link>
                </div>
            </div> 
        }
        {renderBlogList()}
        </div>    
    );
};

export default AdminPage;
