
//Added Imports
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    //useEffect to import (will call fetchItem) 
    useEffect(() => {
        fetchItem()
    }, [])

    //created state variables for user input, set their values
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState(0);
    const [newUnit, setNewUnit] = useState('');

    //
    const addItem = (event) => {
        event.preventDefault();
        console.log('Item added')
    }// NEED A POST

    //create POST


    //Created function to "fetch data" on initial load

    const handleRemove = (itemToRemove) => {
        console.log(itemToRemove);
        axios.delete(`/list/${itemToRemove.id}`)
            .then((response) => {
                console.log('Response of delete route', response)

            }).catch(function(error) {
                console.log('Error in delete:', error)
            })
    }

    const handleClear = () => {
        console.log();
        axios.delete('/list')
            .then((response) => {
                console.log('Response of delete route', response)

            }).catch(function(error) {
                console.log('Error in delete:', error)
            })
    }

    const fetchItem = () => {
        axios.get('/list')
            .then((response) => {
                console.log('the whole response:', response);
                console.log('the data:', response.data);

                setItemList(response.data);
            }).catch(function (err) {

                console.log('ERROR in GET', err);
            });
    }




    return (
        <div className="App">
            <Header />
            <form>
                <p>Add an item</p>
                <input type="text" placeholder="Name of item" />
                <input type="number" placeholder="Enter quantity" />
                <input type="text" placeholder="Enter unit" />
                <input type="submit" value="Add to cart!" />

            </form>

            <button onClick={handleRemove}>Remove Item</button>
            <button onClick={handleClear}>Clear List</button>
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
