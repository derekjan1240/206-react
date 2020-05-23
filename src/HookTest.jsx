import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function HookTest() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [data, setFetch] = useState('');

    const lightState = useSelector(state => state.lightState);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    function fetchData() {
        if (!lightState) { return };
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => {
            setFetch(JSON.stringify(res.data));
        }).catch(() => {
            setFetch('error');
        });
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
                Click me
            </Button>
            <p>data: {data} </p>
            <Button variant="contained" color="primary" onClick={() => fetchData()}>
                Click me
            </Button>
        </div>
    );
}

export default HookTest;