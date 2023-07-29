import React, { useState } from 'react'
import './search.scss'
import mercado from '../../assets/mercado-libre-logo.png'
import lupa_icon from '../../assets/lupa.png'
import { useNavigate , Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { ClearProvider } from '../../store/actions/actions';

const Search = (props) => {

  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const { ClearProvider } = props;

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    ClearProvider();
if(searchValue === "")
{
  navigate('/' );
}else{
  navigate('/items?search='+searchValue );
}
  };


  return (
    <div className='search_container'>
    <form  className='search_from' onSubmit={handleSubmit}>
      <Link to={'/'}>
          <img className='Logo_img' src={mercado} />
      </Link>
      <input  className='imput_panel' 
              placeholder='Nunca dejes de buscar' 
              type="text"
              value={searchValue}
              onChange={handleInputChange}
      />
      <button className='botton_Action' type="submit"> <img className='lupa_img' src={lupa_icon} /></button>
    </form>

    </div>
  )
}
const mapStateToProps = (state) => {
  return {

  };
};


const mapDispatchToProps = {
  ClearProvider,
};

export default connect( mapStateToProps, mapDispatchToProps)(Search)