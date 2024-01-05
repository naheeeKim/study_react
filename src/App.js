import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/app.scss';
import Guide from './pages/guide';
import NoticeIndex from './pages/Notice/NoticeIndex';


function El2(){
  return(
    <>El2</>
  )
}
function El3(){
  return(
    <>
      <p>index~</p>
    </>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/guide/*" element={<Guide />}></Route>
        <Route path="/Notice/NoticeIndex" element={<NoticeIndex />}></Route>
        <Route path="/el2/*" element={<El2 />}></Route>
        <Route path="*" element={<El3 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
