import { useState } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Searchbar from './components/SearchBar';
import JobCard from './components/JobCard';
import JobData from './JobDummyData'
import './App.css'



function App() {
  const [color, setColor] = useState('olive')

  
  

  return (
    <div>
      <Navbar/>
      <Header/>
      <Searchbar/>
      {
        JobData.map((job)=>(
          <JobCard key={job.id} {...job}  />
        ))
      }
     

    </div>
  )
}

export default App
