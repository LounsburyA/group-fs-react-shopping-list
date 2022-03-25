
//Added Imports
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    //useEffect to import (will call fetchItem) 
    useEffect(() => {
        // fetchItem()
    }, [])

    //created state variables for user input, set their values
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState(0);
    const [newUnit, setNewUnit] = useState('');

    //
    const addItem = (event) => {
        event.preventDefault();
        console.log('Item added')
        axios.post('/list', newItem)
        .then( (response) => {
            console.log('Response:', response);
            fetchItem();
            //Clear Inputs & State
            // setStudentList('');
     
          })
          .catch(function (error) {
            console.log('Error on add:', error);
          });
    }// NEED A POST

    //create POST

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
    //Created function to "fetch data" on initial load


//Created function to populate shopping list

//import Item from '../Item/Item';

    function ItemList({ItemList}) {
    console.log('ItemList:', ItemList);       
        return (
            <>
            {ItemList.map(item =>
            (<Item
            key={item.id}
            item={itemName}
            unit={unit}
            quantity={quantity} 
            purchased={purchased} 
             />)
             )}    
            </>
        );
    }

//export default ItemList;

//Created function to create item
function item({item}) {
    return(
        <>
        <p>{item.itemName}</p>
        <p>{item.unit}</p>
        <p>{item.quantity}</p>
        <p>{item.purchased}</p>
        </>
    )
}

const handleSubmit = (event) => {
event.preventDefault();
addItem(item);
clearInputFields();
}

const clearInputFields = () => {
    setNewItem('');
    setNewUnit('');
    setNewQuantity(0);
}

    return (
        <div className="App">
            <Header />
            <form onSubmit={handleSubmit}>
                <p>Add an item</p>
                <input 
                    type="text" 
                    placeholder="Name of item" 
                    onChange={(event) => setNewItem(event.target.value)} />
                <input type="number"
                 placeholder="Enter quantity"
                 onChange={(event) => setNewQuantity(event.target.value)} /> 
                 />
                <input type="text"
                placeholder="Enter unit"
                onChange={(event) => setNewUnit(event.target.value)} /> 
                />
                <input type="submit"
                value="Add to cart!"
                />
            </form>
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
