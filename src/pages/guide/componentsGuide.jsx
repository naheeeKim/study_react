import Layout from './layout';
import Tag from '../components/Tag';

export default function ComponentsGuide() { 
    return (
      <Layout id='components'>
        <div className="content-item" id="tag">
            <div className="title" data-type="component">
                <h4 className="subtitle">Tag</h4>
            </div>
            <div className="content">
                <TagLayout></TagLayout>
            </div>
        </div>
        <div className="content-item" id="button">
            <div className="title" data-type="component">
                <h4 className="subtitle">Button</h4>
            </div>
            <div className="content">
                <ButtonLayout></ButtonLayout>
            </div>
        </div>
      </Layout>
    );
}
  


function TagLayout(){
    return(
        <>
            <div className="tag-box">
                <div className="_caption">data-type='border', data-size = 'large'</div>
                <Tag color='white' size='large' type='border'>서민금융진흥원 소개</Tag>
                <Tag color='gray' size='large' type='border'>서민금융진흥원 소개</Tag>
                <Tag color='black' size='large' type='border'>서민금융진흥원 소개</Tag>
            </div>
            <div className="tag-box">
                <div className="_caption">data-type='border', data-size = 'medium'</div>
                <Tag color='white' size='medium' type='border'>서민금융진흥원 소개</Tag>
                <Tag color='gray' size='medium' type='border'>서민금융진흥원 소개</Tag>
                <Tag color='black' size='medium' type='border'>서민금융진흥원 소개</Tag>
            </div>
            <div className="tag-box">
                <div className="_caption">data-type='border', data-size = 'small'</div>
                <Tag color='white' size='small' type='border'>서민금융진흥원 소개</Tag>
                <Tag color='gray' size='small' type='border'>서민금융진흥원 소개</Tag>
                <Tag color='black' size='small' type='border'>서민금융진흥원 소개</Tag>
            </div>
            <div className="tag-box">
                <div className="_caption">data-type='capsule1'</div>
                <Tag type='capsule1'>#햇살론 유스</Tag>
            </div>
            <div className="tag-box">
                <div className="_caption">data-type='capsule2'</div>
                <Tag type='capsule2'>PRODUCT</Tag>
            </div>
        </>
    )
}


function ButtonLayout(){
    return (
        <>

        </>
    )
}