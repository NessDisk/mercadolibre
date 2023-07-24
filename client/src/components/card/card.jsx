import React from 'react'
import './card.scss'
import Product_Test from '../../assets/Product_Test.jpg'
import { useNavigate , Link } from 'react-router-dom';



function Card() {
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); 
  
    navigate('/items/1');
    
    console.log('Valor del input:');
  }; 
  return (
    <div className='Reslut_info'  >
          <Link  to={'/items/10'}>
              <img className='result_img' src={Product_Test} type="submit"/>
          </Link>
          <div className='result_metaData' >            
            <Link to={'/items/10'} className='result_value' type="submit">
                <h2 className='result_numValue' >
                  nameProduct 0000$  
                </h2>
                <div className='result_pointValue'/>
            </Link>

            <div className='result_characterist'>
              xxx xxx xxxx xxx xxx xxx xxx xxx xxxx xxxx xxxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx
            </div>

          </div>          
          <div className='result_extra'> extra</div>
        </div>
  )
}

export default Card