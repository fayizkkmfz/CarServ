import React from 'react'
import Services from '../services/Services'
import Review from './review/Review'
import ContactUs from './contactus/ContactUs'
import Find from './find/Find'
import WorkFlow from '../workflow/WorkFlow'

function Home() {
  return (
    <div>
      <Services/>
      <Find/>
      <Review/>
      <WorkFlow/>
      <ContactUs/>
    </div>
  )
}

export default Home