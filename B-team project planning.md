**B-Team Project Planning:**
# Group Project.
# React Shopping List. 
​
## To Do
​
[ ] Power on laptop.   
[ ] Install npm libraries, as needed needed. 
    [ ] express, pg. 
[ ] Create Pool. 
[ ] Create Database
​
### Database
​
[x] Setup database with provided data. NAME = shopping-list.  
     
[x] Connect the database to the server w/ pg  
### SERVER/CLIENT (Axios)
  
    [ ] GET request  (initial get on load, and after POST, DELETE, PUT)
            -get database "shopping-list"  
    [ ] POST request  
            -add a item to database (submit to database) (add GET)
    [ ] PUT request  
            -update 'task complete'   
    [ ] STRETCH 
​
### Server
​
[x]  express
[x]  body-parser
[x]  router (tasksRouter)
### DOM
[x] We want to store a list of items to buy in a database, so we can build up our list over a period of time and then go shopping.  
    (rendered to DOM code in components)
    [x] Create input fields:  (ItemForm.jsx)
        [ ] Item 
        [ ] Quantity  
        [ ] Unit  
        Create Buttons: 
        [ ] Submit (Add To Cart) (ItemForm.jsx Component)
        [ ] Clear/Reset (ItemList.jsx Component)
        [ ] Buy/Remove (on each Item.jsx Component)
        buy and remove in item comp
    [x] Create button to submit user input.
        => handle data flow on client side, server and database. (See tasks above). 
### APP.JS
1. Setup Imports/Exports:  
    [x] Import:  
        [x] useState - on item component and item as well
        [ ] 
        [x] Axios
        [x] Any applicable component
    [ ] Export:
        [ ] Any applicable component
    [ ] INPUTS:
        [ ] - State variables/set useState to initial value
        [ ] - clear inputs ('' and "value")
    [ ] Axios GET request (fetchSomething function for axios)
        [ ] - Call function
    [ ] Use effect to call fetchSomething function (EMPTY array!!!)
### Components  
    [x] - Header
    
    [x] Create getTasks function (function gets data from the database).   
        [x] Ajax GET request to url /tasks_library (from database).    
        [x] Call renderToDom function in .then promise.    
2. When the Task is created, it should be stored inside of a database (SQL).    
    [x] Create addTasks function, write an ajax POST request.  
        [x] Add POST request to url /tasks_library as .then promise.  
3.1. When a Task is complete, its visual representation should change on the front end.  
    (updates "Task Complete" table header in the database.)
    [x] Create taskComplete function, write ajax PUT request.  
        [x] Change background of the task container could change from red to green.  
        [x] Create taskComplete function, write ajax POST request as.then promise.  
3.2. Whether or not a Task is complete should also be stored in the database.  
    [x] Create function for PUT request to update 'ready to transfer'.   
4. [x] Create renderToDom function to render data to DOM.
    [x] Each task should have an option to 'Complete' or 'Delete':  
        [x] Add complete/delete buttons in append code block.   