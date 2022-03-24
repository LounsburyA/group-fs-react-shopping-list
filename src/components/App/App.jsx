import React, {useEffect, useState}from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {

let [itemList, setItemList] = useState([]);

const getItem = ()=> {
axios.get('/list')
.then((response)=> {
console.log('the whole response', response);
console.log('the data', response.data);

setItemList(response.data);
}).catch(function (err){

    console.log('ERROR in GET', err);
});
}


    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
