import { useState } from 'react';
import styles from "./Tab.module.scss";

function Tab({tabInit,type}){
    const [currentTab, selectTab] = useState(0);
    const selectHandler = (index) =>{
        selectTab(index);
    }

    return (
        <>
            <ul className={type === 'img' ? `${styles.tab} ${styles['img-tab']}` : `${styles.tab} ${styles['default-tab']}`}>
                {
                    tabInit?.map((el,index) => ( // tabInit의 값이 있을때만 map이 돌아가게 하기 위해서 ? 넣어줌
                        <li key={index} className={index === currentTab ? `${styles['tab-item']} ${styles.selected}` : `${styles['tab-item']}`}
                        onClick={ () => selectHandler(index) }>
                            {type === 'img' ? <span className={`${styles['img-wrap']}`}>{el.name}</span> : el.name}
                        </li>
                    ))
                }
            </ul>
            <div className={`${styles['tab-content']}`}>{tabInit[currentTab].content}</div>
        </>
    )
}
export default Tab