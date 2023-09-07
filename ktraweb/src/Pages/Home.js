import React from 'react'

import { Banner } from '../Components/Banner'
import { Footer } from '../Components/Footer'
import Header from '../Components/Header'

export const Home = () => {
  return (
    <div style={{display:'flex',flexDirection:'column'}}> 
        <Header/>

        <Banner/>

        <Footer/>

    </div>
  )
}
