import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/app.scss';
import styled from 'styled-components';
import Guide from './pages/guide';
import NoticeList from './pages/Notice/NoticeList';
import NoticeDetail from './pages/Notice/NoticeDetail';

// 스타일이 적용된 컴포넌트 생성
const StyledTag = styled.span`
    background-color: #ff6347;
    color: white;
    font-size: 1.5rem;
    padding: 0.25em 1em;
    border: none;
    border-radius: 0.5rem;
`;
const StyledDiv = styled.div`
    display:flex;
    height:100vh;
    align-items:center;
    justify-content:center;
    @media screen and (max-width:1024px){
        background-color:#f2d2db;
    }
`
function El2(){
  return(
    <>El2</>
  )
}
function El3(){
  return(
    <>
        <StyledDiv>
            <StyledTag>Index</StyledTag>
        </StyledDiv>
    </>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/guide/*" element={<Guide />}></Route>
        <Route path="/Notice/NoticeList" element={<NoticeList />}></Route>
        <Route path="/Notice/NoticeDetail" element={<NoticeDetail />}></Route>
        <Route path="/el2/*" element={<El2 />}></Route>
        <Route path="*" element={<El3 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
