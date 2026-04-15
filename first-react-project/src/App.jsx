import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'
import { HomePage } from './pages/HomePage'

const routes = [
  { path: '/', component: HomePage },
  { path: '/jobs', component: JobListings },
  { path: '/view-all-jobs', component: ViewAllJobs },
]
const App = () => {
  return (
    // BrowserRouter is required for NavLink and routing to work
    <BrowserRouter>
      <NavBar />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App