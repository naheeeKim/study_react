import React, { useState } from "react";
import styles from "./NoticeListItem.module.scss";
import { useNavigate } from 'react-router-dom';
export default function NoticeListItem({data}){
    const navigate = useNavigate();
    const HandleOnClick = () => {
      navigate('/Notice/NoticeDetail', {state : data.id});
    }
    return (
        <>
            <li key={data.id} className={`${styles['notice-list-item']}`}>
                <div onClick={()=> HandleOnClick()}>
                    <dl>
                        <dt><img src={data.imgSrc} alt={data.title} /></dt>
                        <dd>
                            <p className="body1 tit">{data.title}</p>
                            <span className={`${styles.date} body3`}>{data.date}</span>
                        </dd>
                    </dl>
                </div>
            </li>
        </>
    )
}