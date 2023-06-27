import React, { Fragment } from 'react'
import ComplaintNavigation from '../complaintComponents/navigation/ComplaintNavigation'
import Header from '../complaintComponents/header/Header'
import Footer from '../complaintComponents/footer/Footer'
import Text from '../complaintComponents/text/Text'


export default function CompHome() {
  return (
     <Fragment>
        <ComplaintNavigation/>
        <Text/>
        <Header/>
        <Footer/>
     </Fragment>
  )
}
