import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './style/_reset.scss';
import Guide from './pages/guide';


function El2(){
  return(
    <>El2</>
  )
}
function El3(){
  return(
    <>El3</>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/guide/*" element={<Guide />}></Route>
        <Route path="/el2/*" element={<El2 />}></Route>
        <Route path="*" element={<El3 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
