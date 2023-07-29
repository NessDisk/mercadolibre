import {React,useEffect } from 'react'
import './details.scss'
import Product_Test from '../../assets/Product_Test.jpg'

import { connect } from 'react-redux';
import { GetItenIddetails, ClearProvider } from '../../store/actions/actions';
import { useLocation } from 'react-router-dom';

function Details(props) {

  const location = useLocation();
  const pathname = location.pathname;
  const id = pathname.split('/').pop();

  const { details, GetItenIddetails,ClearProvider, breadcrumbs_details } = props;
  const mostrarDiv = false;

  const breadcrumbs_detail = breadcrumbs_details.slice(0, 4);


  useEffect(() => {
    // Invocar la acción para obtener los datos desde los endpoints
    ClearProvider();
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
                  <p className='description_p'>
                    {details["item"]["description"]}
                      </p>
                      </div>
                      </div>
                        <div className='details_Values'>
                        <div className='details_Unid_solds'>
                        {details["item"]["condition"]+"- "+ details["item"]["sold_quantity"]+ " vendidos"}
                        </div>
                        <div className='details_tittle'>
                        {details["item"]["title"]}
                        </div>
                        <p className='details_amount'>
                        {"$ "+details["item"]["price"]["amount"]}  <strong style={ { fontSize: "20px",
                        position: 'relative', 
                        top:"-6px",
                        right:"6px",
                        fontWeight:"lighter" 
                      }}>00</strong>
                    </p>
                  <button className='buttton_Comprar'>
                  Comprar
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
  ClearProvider,
};


export default connect(mapStateToProps, mapDispatchToProps)(Details) ;
