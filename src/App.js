import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/app.scss';
import styled from 'styled-components';
import Guide from './pages/guide';
import Main from './pages/main';
import NoticeList from './pages/Notice/NoticeList';
import NoticeDetail from './pages/Notice/NoticeDetail';

// 스타일이 적용된 컴포넌트 생성
const StyledTag = styled.a`
    background-color: #ff6347;
    color: white;
    font-size: 1.5rem;
    padding: 0.25em 1em;
    border: none;
    border-radius: 0.5rem;
`;
const StyledDiv = styled.div`
    display:flex;
    gap:1rem;
    height:100vh;
    align-items:center;
    justify-content:center;
    @media screen and (max-width:1024px){
        background-color:#f2d2db;
    }
`
function Index(){
  return(
    <>
        <StyledDiv>
            <StyledTag href='/main/index'>Main</StyledTag>
            <StyledTag href='/guide/*'>Guide</StyledTag>
            <StyledTag href='/Notice/NoticeList'>Notice</StyledTag>
        </StyledDiv>
    </>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main/index" element={<Main />}></Route>
        <Route path="/guide/*" element={<Guide />}></Route>
        <Route path="/Notice/NoticeList" element={<NoticeList />}></Route>
        <Route path="/Notice/NoticeDetail" element={<NoticeDetail />}></Route>
        <Route path="*" element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
