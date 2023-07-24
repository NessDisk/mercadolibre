import React from 'react'
import './details.scss'
import Product_Test from '../../assets/Product_Test.jpg'
function details() {
  return (
    <div className='container'>
    <div className='dir_text' >dir →</div>
    <div className='resultSearch'>
      <div className='details_container'>
          <div  className='details_infoProduct'>
            <img className='details_imgProduct' src={Product_Test} />
            <div className='details_description' >
              <h2 className='details_tittle'>
                title  -- title  
              </h2>
              <p>
                xxxxxxxxxxxxxx XXXXXXXXXXXXx xxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxx xxxxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxx
              </p>
            </div>
          </div>
          <div className='details_Values'>
          <div>
          info
          </div>
          <div>
         Name- product
          </div>
          <div>
          value xxxxx$
          </div>
          <div>
          Botton
          </div>
          </div>
      </div>

    </div>
  </div>
  )
}

export default details