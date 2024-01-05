import React ,{useEffect, useState}from "react";
import "../../style/pages/notice/notice.scss";
import NoticeListItem from "./NoticeListItem";
import axios from 'axios';

export default function NoticeList(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('../../data/notice/list-data.json');
            setData(response.data);
        } catch (err) {
            setError(err);
        }
        };

        fetchData();
    }, []);
    return (
        <>
            <ul className='notice-list'>
                {data?.map(item => (
                    <NoticeListItem data={item} key={item.id}></NoticeListItem>
                ))}
            </ul>
        </>
    )
}