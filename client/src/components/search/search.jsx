import React, { useState } from 'react'
import './search.scss'
import mercado from '../../assets/mercado-libre-logo.png'
import lupa_icon from '../../assets/lupa.png'
import { useNavigate } from 'react-router-dom';

const Search = () => {

  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    navigate('/items?search='+searchValue );
    
    console.log('Valor del input:', searchValue);
  };


  return (
    <form className='search_container' onSubmit={handleSubmit}>
      <img className='Logo_img' src={mercado} />
      <input  className='imput_panel' 
              placeholder='Nunca dejes de buscar' 
              type="text"
              value={searchValue}
              onChange={handleInputChange}
      />
      <button className='botton_Action' type="submit"> <img className='lupa_img' src={lupa_icon} /></button>
    </form>
  )
}

export default Search