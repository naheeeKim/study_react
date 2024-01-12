import React ,{useEffect, useState}from "react";
import "../../style/pages/notice/notice.scss";
import Tag from "../components/Tag";
import NoticeListItem from "./NoticeListItem";
import axios from 'axios';



export default function NoticeList(){
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);
    const [visible, setVisible] = useState(0);
    const [ count , setCount ] = useState(0);
    const url = '../../data/notice/list-data.json'
    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setVisible(visible + 3); // 3씩 증가
            setData(response.data);
            console.log("render",visible)
        } catch (err) {
            setError(err);
        }
    };
    
    useEffect(() => {
        if(count == 0){
            fetchData(); 
            setCount(count+1); // 리스트가 새로고침 됐을때만 처음에 fetchData가 실행됐으면 해서 count넣어줌!
        }
    },[url]);

    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleItemClick = (id) => {
        setSelectedItemId(id);
    };
    
    return (
        <>
            <div className="content-container">
                <br />
                <p>Total items: {data.length}</p> 
                <ul className='notice-list'>
                    {data.slice(0, visible).map((item) => (
                        <NoticeListItem data={item} key={item.id} onItemClick={handleItemClick}></NoticeListItem>
                    ))}
                </ul>
                {visible < data.length && (
                <div className="more-btn-box">
                    <Tag className='more-btn' tag='button' type='capsule2' onclick={()=>{fetchData()}}>더보기</Tag>
                </div>  
                )} 
            </div>  
        </>
    )
}