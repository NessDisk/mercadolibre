import React from 'react'
import './results.scss'
import Product_Test from '../../assets/Product_Test.jpg'

function results() {
  return (
    <div className='container'>
      <div className='dir_text' >dir →</div>
      <div className='resultSearch'>
        <div className='Reslut_info'>
          <img className='result_img' src={Product_Test}/>
          <div className='result_metaData' >
            
            <div className='result_value'>
                <h2 className='result_numValue'>
                  value 0000$  
                </h2>
                <div className='result_pointValue'/>
            </div>

            <div className='result_characterist'>
              xxx xxx xxxx xxx xxx xxx xxx xxx xxxx xxxx xxxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx
            </div>

          </div>          
          <div className='result_extra'> extra</div>
        </div>

      {/*    */}

      <div className='Reslut_info'>
          <img className='result_img' src={Product_Test}/>
          <div className='result_metaData' >
            
            <div className='result_value'>
                <h2 className='result_numValue'>
                  value 0000$  
                </h2>
                <div className='result_pointValue'/>
            </div>

            <div className='result_characterist'>
              xxx xxx xxxx xxx xxx xxx xxx xxx xxxx xxxx xxxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx
            </div>

          </div>          
          <div className='result_extra'> extra</div>
        </div>
 {/*    */}

 <div className='Reslut_info'>
          <img className='result_img' src={Product_Test}/>
          <div className='result_metaData' >
            
            <div className='result_value'>
                <h2 className='result_numValue'>
                  value 0000$  
                </h2>
                <div className='result_pointValue'/>
            </div>

            <div className='result_characterist'>
              xxx xxx xxxx xxx xxx xxx xxx xxx xxxx xxxx xxxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx
            </div>

          </div>          
          <div className='result_extra'> extra</div>
        </div>

      </div>
    </div>
  )
}

export default results