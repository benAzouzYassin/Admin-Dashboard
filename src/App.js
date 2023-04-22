import { Box } from '@mui/material';
import './App.css'
import Sidebar from './pages/Dashboard/Sidebar/Sidebar';
import { PagesContextProvider } from "./context/PagesContext"
import MainDashboard from './pages/Dashboard/MainDashboard/MainDashboard';
import RightBar from './pages/Dashboard/rightBar/RightBar';
import { useState } from 'react';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const toggleSideBar = () => setSidebarVisible(prev => !prev)
  return (
    <PagesContextProvider>


      <Box className='App__glass pt-10 flex flex-col lg:flex-row items-center lg:items-start'>
        <Sidebar isVisible={sidebarVisible} toggleSideBar={toggleSideBar} />
        <MainDashboard toggleSideBar={toggleSideBar} />
        <RightBar />
      </Box>

    </PagesContextProvider>
  );
}

export default App;
