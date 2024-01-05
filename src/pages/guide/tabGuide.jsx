import React from 'react';
import Layout from './layout';
import Tab from '../components/Tab';

export default function TabGuide() { 
    return (
        <>
            <Layout id='tab'>
                <h4 className="subtitle">Tab</h4>
                <div className="content-list">
                    <div className="content-container">
                        <Tab tabInit={
                            [{name:<span>tab1</span>,content:'tab1 content'},
                            {name:<span>tab2</span>,content:'tab2 content'},
                            {name:<span>tab3</span>,content:'tab3 content'},]
                        }
                        />
                    </div>
                </div>
                <h4 className="subtitle">Img Tab</h4>
                <div className="content-list">
                    <div className="content-container">
                        <Tab tabInit={[
                                {name:<img src="../images/main/img_main_age_01.png" alt="청소년" />,content:<div className='con-box'><strong className="title1">청소년</strong></div>},
                                {name:<img src="../images/main/img_main_age_02.png" alt="대학생" />,content:<div className='con-box'><strong className="title1">대학생</strong></div>},
                                {name:<img src="../images/main/img_main_age_03.png" alt="청년" />,content:<div className='con-box'><strong className="title1">청년</strong></div>},
                                {name:<img src="../images/main/img_main_age_04.png" alt="시니어" />,content:<div className='con-box'><strong className="title1">시니어</strong></div>},
                                {name:<img src="../images/main/img_main_age_05.png" alt="기타" />,content:<div className='con-box'><strong className="title1">기타</strong></div>},
                            ]} type='img'
                        />
                    </div>
                </div>
            </Layout>
        </>
    );
}
  