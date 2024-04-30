import {useParams}  from "react-router";
import axios from "axios";
import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import './css/ShowPage.css';
const ShowPage = () => {
    const{id} = useParams();
    const [post, setPost] = useState(null);
  
    const getPost = (id) => {
        axios.get(`http://localhost:3001/posts/${id}`).then((res) =>{
            setPost(res.data)
          
        })

    };
    useEffect(() => {
        getPost(id)

    }, [])
    return (
        <div className = "blog-container">
            <img src="/main-image.png" className="header-image" />
            <div className = 'd-flex'>
                <h1 className = "flex-grow-1"> </h1>
                <div>
                    <Link
                     className = 'btn btn-primary'
                     to = {`/blogs/${id}/edit`}
                    >
                        수정
                    </Link>
                </div>
            </div>

            {post ? (
            <>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </>
            ) : (
            <p>Loading...</p> // 데이터를 불러오는 중이거나 post가 null일 때 표시될 메시지
            )}
      </div>
    )
};

export default ShowPage;