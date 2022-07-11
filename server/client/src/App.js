import React from 'react';
import Cookies from 'js-cookie';
import {Routes, Route} from 'react-router-dom';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import Forgetpassword from './Component/Forgetpassword';
import Sidebar from './Component/Sidebar';
import Profilelist from './Component/profiles/Profilelist';
import Addprofile from './Component/profiles/Addprofile';
import Updateprofile from './Component/profiles/Updateprofile';
import Viewprofile from './Component/profiles/Viewprofile';
import Rooms from './Component/hospital/Rooms';
import Available from './Component/hospital/Available';
import DeviceList from './Component/hospital/DeviceList';

 const App = () => {

  const token =  Cookies.get('jwt');
  return (
    <>
        <Routes>
          <Route exact path="/" element={token ? <Rooms /> : <Login />}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Forgetpassword" element={<Forgetpassword />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/profilelist" element={<Profilelist />} />
          <Route path="/addprofile" element={<Addprofile />} />
          <Route path="/updateprofile" element={<Updateprofile />} />
          <Route path="/viewprofile" element={<Viewprofile />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/available" element={<Available />} />
          <Route path="/devicelist" element={<DeviceList />} />
        </Routes>
    </>
  )
}

export default App;