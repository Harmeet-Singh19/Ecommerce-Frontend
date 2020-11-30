import React from 'react'
import gif from '../../assets/loader/gif2.gif'
import './Loader.css'

function Loader() {
    return (
        <div style={{height:"80vh",justifyContent:"center",display:"flex",flexDirection:"column",background:'#fff'}}>
           <div className="head">LOADING </div>
            <img className="loader-gif" src={gif} alt={"Loader"}/>
        </div>
    )
}

export default Loader
