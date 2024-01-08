import React ,{useEffect, useState}from "react";
import "../../style/pages/notice/notice.scss";
import Tag from "../components/Tag";
import NoticeListItem from "./NoticeListItem";
import axios from 'axios';



export default function NoticeList(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [visible, setVisible] = useState(3);
   
    const fetchData = async () => {
        try {
            const response = await axios.get('../../data/notice/list-data.json');
            setVisible(visible + 3)
            setData(response.data.slice(0,visible));
        } catch (err) {
            setError(err);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="content-container">
                <ul className='notice-list'>
                    {data?.map(item => (
                        <NoticeListItem data={item} key={item.id}></NoticeListItem>
                    ))}
                </ul>
                <div className="more-btn-box">
                    <Tag className='more-btn' tag='button' type='capsule2' onclick={() => console.log("더보기")}>더보기</Tag>
                </div>  
            </div>  
            
        </>
    )
}