import React ,{useEffect, useState}from "react";
import "../../style/pages/notice/notice.scss";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import jsonData from "./data/notice/detail-data.json"

export default function NoticeDetail({}){
    // const [data, setData] = useState([]);
    // const [error, setError] = useState([]);
    // const [ count , setCount ] = useState(0);
    // const { state } = useLocation();
    // const url = '../../data/notice/detail-data.json'
    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get(url);
    //         setData(response.data);
    //     } catch (err) {
    //         setError(err);
    //     }
    // };
    
    // useEffect(() => {
    //     if(count == 0){
    //         fetchData(); 
    //         setCount(count+1); 
    //     }
    // },[url]);


    const data = jsonData
    const { state } = useLocation();

    return (
        <>
            {data.slice(state-1, state).map((item) => ( // map이용할때 반복되는 구조가 하나의 태그로 감싸져있어야한다
            <div className="notice-detail" key={item.id}>
                <div className="content-container">
                    <div className="notice-detail-top">
                        <strong className="tit headline1">{item.title}</strong>
                        <p className="date">{item.date}</p>
                    </div>
                    <div className="notice-detail-img"><img src={item.imgSrc} alt="{item.title}" /></div>
                    <div className="notice-detail-content body3">
                        {item.content}
                    </div>
                </div>
            </div>
            ))}   
        </>
    )
}