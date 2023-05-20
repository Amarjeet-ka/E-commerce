import React, { Fragment } from 'react'
import NavigationBar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Gridimage from '../components/gridimage/Gridimage'
import Topcollection from '../components/topcollection/Topcollection'
import Transparentsec from '../components/transparentsec/Transparentsec'
import Gridicon from '../components/gridicon/Gridicon'
import Footer from '../components/footer/Footer'
import Social from '../components/social/Social'
import Recomend from '../components/recomend/Recomend'


export default function Homepage() {
  return (
   <Fragment>
    <NavigationBar/>
    <Header/>
    <Gridimage/>
    <Topcollection/>
    <Transparentsec/>
    <Recomend/>
    <Gridicon/>
    <Social/>
    <Footer/>
   </Fragment>
  )
}
