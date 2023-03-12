import React, { useReducer } from 'react';
import { actionTypes } from '../state/actionTypes';
import { INITIAL_STATE, postReducer } from '../state/postReducer';

const Post = () => {
    const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);


    const handlePost = () => {
        dispatch({ type: actionTypes.FETCH_START })

        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(data => {
                // {type:'FETCH_SUCCESS', payload:data}
                dispatch({ type: actionTypes.FETCH_SUCCESS, payload: data })
            })
            .catch((err) => {
                dispatch({ type: actionTypes.FETCH_ERROR });
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <button onClick={handlePost} className='btn btn-success m-3'>
                {state.loading ? "Wait..." : 'Fetch the post'}
            </button>
            <p>{state.post?.title}</p>
            <span>{state.error && "Someting went wrong!"}</span>
        </div>
    );
};

export default Post;