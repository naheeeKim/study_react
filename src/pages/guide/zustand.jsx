import React, { useState, useEffect } from 'react';
import Layout from './layout';
import useStore from './store';
import Tag from '../components/Tag';

export default function Zustand() {
    // useStore 훅을 이용해 상태와 액션에 접근
    const { count, increment } = useStore();
    const [state, setState] = useState(0);

    useEffect(() => {
        console.log('마운트 될 때 실행된다.');
    }, []); // 끝에 []가 들어가면 처음에 마운트 됐을때만 실행되고 빈 값이면 페이지 내에서 이벤트 발생할때마다(렌더링될때마다) 실행된다.
    return (
      <>
        <Layout id=''>
            <p>useStore Count: {count}</p><br />
            <Tag type='capsule2' tag='button' onclick={ increment }>useStore click</Tag>

            <br /><br /><br />
            <p>useState Count : {state}</p><br />
            <Tag type='capsule2' tag='button' onclick={ () => setState(state + 1) }>useState click</Tag>
            <h1 id="hi">안녕하세요.</h1>
        </Layout>
      </>
    );
}