import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogForm = ({ editing }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [publish, setPublish] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [order, setOrder] = useState('');
    const [date, setDate] = useState('');  
    
    useEffect(() => {
        if (editing) {
            setLoading(true);
            axios.get(`http://localhost:3001/posts/${id}`)
                .then(res => {
                    setTitle(res.data.title);
                    setBody(res.data.body);
                    setPublish(res.data.publish);
                    setOrder(res.data.order);
                    setDate(res.data.date);  
                })
                .catch(err => {
                    console.error(err);
                    setError('Failed to fetch data');
                })
                .finally(() => setLoading(false));
        }
    }, [id, editing]);
   
    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const method = editing ? axios.patch : axios.post;
        const url = editing ? `http://localhost:3001/posts/${id}` : 'http://localhost:3001/posts';

        method(url, { title, body, publish, order, date })
            .then(() => {
                navigate(editing ? `/blogs/${id}` : '/blogs');
            })
            .catch(err => {
                console.error(err);
                setError('Failed to process your request');
            })
            .finally(() => setLoading(false));
    };
    return (
        <div>
            <img src="/main-image.png" alt="Main Content Image" className="main-image" />
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">제목</label>
                    <input
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">내용</label>
                    <textarea
                        className="form-control"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        rows="10"
                        required
                    />
                </div>
                <div className="form-check mb-3">
                    <input
                        className='form-check-input'
                        type='checkbox'
                        checked={publish}
                        onChange={(e) => setPublish(e.target.checked)}
                    />
                    <label className='form-check-label'>
                        Publish
                    </label>
                    
                </div>
                <button className="btn btn-primary" type="submit" disabled={loading}>
                    {editing ? '수정' : '저장'}
                </button>
                <button className="btn btn-danger ms-1" onClick={() => navigate(-1)} type="button">
                    취소
                </button>
            </form>
        </div>
    );
};

BlogForm.propTypes = {
    editing: PropTypes.bool
};

BlogForm.defaultProps = {
    editing: false
};

export default BlogForm;
