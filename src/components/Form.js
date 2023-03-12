import React, { useReducer } from 'react';
import { actionTypes } from '../state/actionTypes';
import { formReducer, INITIAL_STATE } from '../state/formReducer';

const Form = () => {
    const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

    const handleChange = e => {
        dispatch({ type: actionTypes.CHANGE_INPUT, payload: { name: e.target.name, value: e.target.value } })

    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(state);
    }


    return (
        <div>
            <form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <div class="form-group">
                    <label>Email address</label>
                    <input onChange={handleChange} type="email" class="form-control" name='email' aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={handleChange} type="password" class="form-control" name='password' id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-check">
                    <input checked={state.isChecked} onChange={() => dispatch({ type: actionTypes.CHANGE_CHECK })} type="checkbox" class="form-check-input" name='check' id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div className='d-flex my-2'>
                    <button onClick={() => dispatch({ type: actionTypes.DECREMENT })} className='btn-sm'>-</button>
                    <h2>Quantity {state.quantity}</h2>
                    <button onClick={() => dispatch({ type: actionTypes.INCREMENT })}>+</button>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Form;