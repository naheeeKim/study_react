import React from "react";
import styles from "./NoticeListItem.module.scss";


export default function NoticeListItem({data}){
    return (
        <>
            <li key={data.id} className={`${styles['notice-list-item']}`}>
                <a href={data.href}>
                    <dl>
                        <dt><img src={data.imgSrc} alt={data.title} /></dt>
                        <dd>
                            <p className="body1 tit">{data.title}</p>
                            <span className={`${styles.date} body3`}>{data.date}</span>
                        </dd>
                    </dl>
                </a>
            </li>
        </>
    )
}