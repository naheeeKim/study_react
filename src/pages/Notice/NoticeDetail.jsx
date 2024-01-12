import React ,{useEffect, useState}from "react";
import "../../style/pages/notice/notice.scss";
import axios from 'axios';

export default function NoticeDetail({data,selectedItemId }){
    const selectedItem = data.find(item => item.id === selectedItemId);

    if (!selectedItem) {
        return <div>해당 아이템을 찾을 수 없습니다.</div>;
    }
    return (
        <>
            <div className="notice-detail">
                {data.map((item) => (
                    <div className="notice-item" key={item.id}>
                        <div className="notice-top">
                            <strong className="tit">{item.title}</strong>
                        </div>
                        <div className="notice-content">
                            {item.content}
                        </div>
                    </div>
                ))}    
            </div>
        </>
    )
}