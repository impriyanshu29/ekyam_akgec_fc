
import {useLocation} from 'react-router-dom'
import React, { useState,useEffect } from 'react';
import Sidebar from '../components/Dashboard/Sidebar'
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Profile from '../components/Dashboard/Profile'

function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if(tabFromUrl){
      setTab(tabFromUrl);
    }
    
  }, [location.search]);
  return <div>
    <div className=''>
      <Sidebar/>
  </div>
 
  {tab === 'profile' && <Profile/>}
  </div>
}

export default Dashboard















































































































































































// https://example.com/page?name=John&age=25
// The part after the question mark (?) is called the query string, and it contains key-value pairs like name=John and age=25. Now, if you want to work with and manipulate these values in JavaScript, you can use the URLSearchParams object.