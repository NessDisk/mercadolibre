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
  const { endpoints, setEndpoints, breadcrumbs } = props;

// productos
 const products = endpoints.slice(0, 5);

 // breadcrumb
 const breadcrumb = breadcrumbs.slice(0, 4);


  useEffect(() => {

    props.setEndpoints(searchValue);
    console.log('El componente se ha montado',  searchValue);
  }, [props.setEndpoints, searchValue]);


  return (
    <div className='container'>
      <div className='dir_text' >
      <div className='breadcrumb'>
      {breadcrumb.map((endpoin, index) => ( 
        <div className='breadcrumb_tag'> {endpoin["name"] + ' > '}</div>
        ))}
      </div>
 
  </div>
      <div className='resultSearch'>
   
   
{products.map((endpoin, index) => ( 
<Card  datos={endpoin} ></Card>
  ))}
      </div>
    </div>
  
  )
}
const mapStateToProps = (state) => {
  return {
    endpoints:  state.endpoints,
    breadcrumbs: state.breadcrumbs
  };
};

const mapDispatchToProps = {
  setEndpoints,
};

export default connect(mapStateToProps, mapDispatchToProps)(Results) ;