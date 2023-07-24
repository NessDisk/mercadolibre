import React, { useEffect }from 'react'
import './results.scss'
import Card from '../card/card'
import { connect } from 'react-redux';
import { setEndpoints } from '../../store/actions/actions';

function Results(props) {

  const { endpoints, setEndpoints } = props;


  // useEffect(() => {
  //   // Simulando una llamada asincrónica para obtener los endpoints
  //   // Aquí podrías usar fetch o axios para obtenerlos de una API real
  //   setTimeout(() => {
  //     const fetchedEndpoints = ['https://api.mercadolibre.com/sites/MLA/search?q=:test'];
  //     setEndpoints(fetchedEndpoints);

  //   }, 5000); // Simulamos un retardo de 2 segundos para obtener los endpoints

  //   console.log(endpoints);
  // }, [setEndpoints]);

  useEffect(() => {
    // Invocar la acción para obtener los datos desde los endpoints
    props.setEndpoints();
    console.log('El componente se ha montado');
  }, [props.setEndpoints]);


  return (
    <div className='container'>
      <div className='dir_text' >dir →</div>
      <div className='resultSearch'>

      {/* <Card></Card>
      <Card></Card>
      <Card></Card> */}

{/* {props.endpoints.map((endpoint, index) => ( <p key={index}>{endpoint}</p> ))} */}

{endpoints.map((endpoint, index) => ( <p key={index}>{endpoint.title}</p> ))}
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