import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        }else{
            console.log('invalid input');
        }
    };

    return (
        <div className='card'>
            <h4>Add a new room</h4>
            <Form onSubmit={onSubmit}>
                <input
                type='text'
                placeholder='name'
                onChange ={(e)=> setName(e.target.value)}
                value={name}
                />
                <input
                type='text'
                placeholder='area'
                onChange ={handleAreaInput}
                value={area}
                />
                <Button variant='outline-info'  type='submit'>Add Room</Button>
            </Form>
        </div>
    )
};