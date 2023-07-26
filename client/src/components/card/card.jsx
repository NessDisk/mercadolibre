import React from 'react'
import './card.scss'
import Product_Test from '../../assets/Product_Test.jpg'
import { useNavigate , Link } from 'react-router-dom';



function Card( props) {
  
  const datosRecibidos = props.datos;

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); 
  
    navigate('/items/1');
    
    console.log('Valor del input:');
  }; 
  return (
    <div className='Reslut_info'  >
          <Link  to={'/items/10'}>
              <img className='result_img' src={datosRecibidos.thumbnail} type="submit"/>
          </Link>
          <div className='result_metaData' >            
            <Link to={'/items/10'} className='result_value' type="submit">
                <h2 className='result_numValue' >
                {" $ " + datosRecibidos.price }
                </h2>
                <div className='result_pointValue'/>
            </Link>

            <div className='result_characterist'>
             {datosRecibidos.title}
            </div>

          </div>          
          <div className='result_extra'>  {datosRecibidos.address.state_name}</div>
        </div>
  )
}

export default Card