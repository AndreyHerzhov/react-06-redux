import { Link, useParams, useNavigate, Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from "react";
import { getSinglePosts } from 'shared/api/posts';

const SinglePostPage = () => {
    const [state, setState] = useState({
        item: {},
        loading: false,
        error: null
    })
    const {id} = useParams()
    const navigate = useNavigate();

    const location = useLocation()
    const  from  = location.state?.from || "/posts"

    useEffect(() => {
        const fetchPosts = async() => {
            setState(prevState => ({
                ...prevState,
                loading: true,
                error: null,

            }))
            try {
                const result = await getSinglePosts(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        item: result
                    }
                })
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error
                }))
            }
            finally {
                setState(prevState => {
                    return {
                        ...prevState,
                        loading: false,

                    }
                })
            }
        }
        fetchPosts()
    }, [id, setState] ) 

    const goBack = () => navigate(from)

    const { title, body } = state.item
    
    return (
        <div className="container">
            <button onClick={goBack}>Go back</button>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link state={{from}} to={`/posts/${id}/comments`}>Comments</Link>
            <Outlet/>
        </div>
    )
}

export default SinglePostPage