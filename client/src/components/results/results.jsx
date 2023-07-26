import React, { useEffect }from 'react'
import './results.scss'
import Card from '../card/card'
import { connect } from 'react-redux';
import { setEndpoints } from '../../store/actions/actions';
import { useLocation } from 'react-router-dom';

function Results(props) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchValue = queryParams.get('search');
  const { endpoints, setEndpoints } = props;

// productos
 const products = endpoints.slice(0, 5);


  useEffect(() => {
    // Invocar la acción para obtener los datos desde los endpoints
    props.setEndpoints(searchValue);
    console.log('El componente se ha montado', searchValue);
  }, [props.setEndpoints, searchValue]);


  return (
    <div className='container'>
      <div className='dir_text' >dir →</div>
      <div className='resultSearch'>

     
      

{/* {props.endpoints.map((endpoint, index) => ( <p key={index}>{endpoint}</p> ))} */}

{/* <p key={index}>{endpoin.title}</p>  */}
{products.map((endpoin, index) => ( 
<Card  datos={endpoin} >

</Card>
  ))}
      </div>
    </div>
  
  )
}

const mapStateToProps = (state) => {
  return {
    endpoints: state.endpoints,
  };
};

const mapDispatchToProps = {
  setEndpoints,
};

export default connect(mapStateToProps, mapDispatchToProps)(Results) ;