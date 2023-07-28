import {React,useEffect } from 'react'
import './details.scss'
import Product_Test from '../../assets/Product_Test.jpg'

import { connect } from 'react-redux';
import { GetItenIddetails } from '../../store/actions/actions';
import { useLocation } from 'react-router-dom';

function Details(props) {

  const location = useLocation();
  const pathname = location.pathname;
  const id = pathname.split('/').pop();

  const { details, GetItenIddetails, breadcrumbs_details } = props;
  const mostrarDiv = false;

  const breadcrumbs_detail = breadcrumbs_details.slice(0, 4);


  useEffect(() => {
    // Invocar la acción para obtener los datos desde los endpoints
    props.GetItenIddetails(id);
    console.log('El componente detail ', details);
  }, [props.GetItenIddetails, id]);

  return (
    <div className='container'>
    <div className='dir_text' >
    <div className='breadcrumb'>
      {breadcrumbs_detail.map((endpoin, index) => ( 
        <div className='breadcrumb_tag'> {endpoin["name"] + ' > '}</div>
        // <div>test</div>
        
        ))}
      </div>

    </div>
    <div className='resultSearch'>
     { details != null > 0 &&
        <div className='details_container'>
              <div  className='details_infoProduct'>
                <img className='details_imgProduct' src={details["item"]["picture"]} />
                <div className='details_description' >
                  <h2 className='details_tittle'>              
                  Descipcion de producto
                  </h2>
                  <p>
                    {details["item"]["description"]}
                      </p>
                      </div>
                      </div>
                        <div className='details_Values'>
                        <div>
                        info
                        </div>
                        <div>
                        {details["item"]["title"]}
                        </div>
                        <div>
                        {details["item"]["price"]["amount"]} 
                    </div>
                  <button>
                  Botton
                </button>
              </div>
          </div>
      }
      

    </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    details: state.details,
    breadcrumbs_details: state.breadcrumbs_details,
  };
};

const mapDispatchToProps = {
  GetItenIddetails,
};


export default connect(mapStateToProps, mapDispatchToProps)(Details) ;
