import React from 'react'

function Searchbar() {
  return (
    <div className='flex gap-4 my-10 justify-center px-10 '>
        <select name="" id="" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden selected>Job Role</option>
            <option value="IOS Developer" >IOS Developer</option>
            <option value="Frontend Developer" >Frontend Developer</option>
            <option value="Backend Developer" >Backend Developer</option>
            <option value="Android Developer" >Android Developer</option>
            <option value="Deeloper Advocate" >Deeloper Advocate</option>
        </select>
      <select name="" id="" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden selected >Job Type</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select name="" id="" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden selected >Location</option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select name="" id="" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden selected >Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Developer">Junior Developer</option>
        <option value="Serior Developer">Senior Developer</option>
      </select>
      <button className='w-64 bg-blue-500 text-white font-bold py-3 rounded-r-md'>Search</button>
      
    </div>
  )
}

export default Searchbar;
