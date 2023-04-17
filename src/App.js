import { Box } from '@mui/material';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import { PagesContextProvider } from "./context/PagesContext"
import MainDashboard from './components/MainDashboard/MainDashboard';

function App() {
  return (
    <PagesContextProvider>

      <div className="App ">
        <Box className='App__glass pt-10'>
          <Sidebar />
          <MainDashboard />
          <Box  >left bar</Box>
        </Box>
      </div>
    </PagesContextProvider>
  );
}

export default App;
