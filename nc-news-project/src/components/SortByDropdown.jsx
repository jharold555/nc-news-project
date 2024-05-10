import React from 'react'
import { useState } from 'react'

const SortDropdown = ({setSortBy, setOrderBy}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(1)
    const [isDesc, setIsDesc] = useState(true)
    const handleOrderSelected = (order) => {
     setIsDesc(order === 'desc')
     setOrderBy(order)
    }
    const handleCheckboxChange = (id) => {
      setSelected(id)
    }
  return (
    <span style={{display: 'block', }}>
      <button style={{marginRight: '20px'}}onClick={()=>{setIsOpen(!isOpen)}}>Sort by {isOpen ? '(hide menu)' : '(show menu)'}</button>
      {isOpen && (
        <ul className="dropdown-menu" style={{cursor: 'pointer'}}>
          <li onClick={() => {setSortBy('created_at'), handleCheckboxChange(1)}}>Date posted
          <input type='checkbox' onChange={() => {}}checked={selected === 1}></input>
          </li>
          
          <li onClick={() => {setSortBy('comment_count'), handleCheckboxChange(2)}}>Comment Count
          <input type='checkbox' onChange={() => {}} checked={selected === 2}></input>
          </li>
          <li onClick={() => {setSortBy('votes'), handleCheckboxChange(3)}}>Votes
          <input type='checkbox' onChange={() => {}}checked={selected === 3}></input>
          </li>
        </ul>
      )}
      <span>
      <button onClick={() => {handleOrderSelected('asc')}} style={{backgroundColor: !isDesc ? 'gray' : 'none'}}>ASC</button>
      <button onClick={() => {handleOrderSelected('desc')}} style={{backgroundColor: isDesc ? 'gray' : 'none'}}>DESC</button>
      </span>
      
    </span>
  )
}

export default SortDropdown