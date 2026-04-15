import HeroSection from '../components/Hero';   
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

import React from 'react'

export const HomePage = () => {
  return (
    <>
        <HeroSection />
        <HomeCards />
        <JobListings />
        <ViewAllJobs />
        
    </>
  )
}

export default HomePage;