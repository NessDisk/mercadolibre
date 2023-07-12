import React from 'react'
import './search.scss'
import mercado from '../../assets/mercado-libre-logo.png'
import lupa_icon from '../../assets/lupa.png'

const search = () => {
  return (
    <div className='search_container'>
      <img className='Logo_img' src={mercado} />
      <input className='imput_panel' placeholder='Nunca dejes de buscar'></input>
      <button className='botton_Action'> <img className='lupa_img' src={lupa_icon} /></button>
    </div>
  )
}

export default search