import { Box } from '@mui/material';
import './App.css'
import Sidebar from './pages/Dashboard/Sidebar/Sidebar';
import { PagesContextProvider } from "./context/PagesContext"
import MainDashboard from './pages/Dashboard/MainDashboard/MainDashboard';
import LeftBar from './pages/Dashboard/LeftBar/LeftBar';

function App() {
  return (
    <PagesContextProvider>

      <div className="App ">
        <Box className='App__glass pt-10'>
          <Sidebar />
          <MainDashboard />
          <LeftBar />
        </Box>
      </div>
    </PagesContextProvider>
  );
}

export default App;
