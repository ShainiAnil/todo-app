import React, { useState } from 'react'
import { TodoList } from './TodoList';
import { TextInput } from './TextInput/TextInput';

export const Todo = () => {
  // const [searchInputValue, setSearchInputValue] = useState("");
  // const [searchList, setSearchList] = useState([]);
  
  const [inputField, setInputField ] = useState("")
  const [ errorField, setErrorField ] = useState(false)
  

  

  
 
  return (
    <div className="search-container">
      <div className="heading-section">
        
        <h1>Todo List</h1>
      </div>
      {/* <TextInput/> */}
      
      <TodoList />
    </div>
  );
}

