import Layout from './layout';
import Tag from '../components/Tag';
import Button from '../components/Button';
import ArrowIcon from "../components/ArrowIcon";


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
            <div className="con-box">
                <div className="btn-box">
                    <div className="_caption">size="l"</div>
                    <div className="inner-box">
                        <Button type="arrow" tag="a" href="/" target="_blank" color="blue" size="l" download hoverType="open" hoverText="바로가기">
                            <ArrowIcon type="arrow-left" direction="left" size="14" color="white" strokeWidth="1.5"></ArrowIcon>
                        </Button>
                        <Button type="arrow" tag="a" href="/" target="_blank" color="white" size="l" download hoverType="bg">
                            <ArrowIcon type="arrow-left" direction="left" size="14" color="black" strokeWidth="1.5"></ArrowIcon>
                        </Button>
                        <Button type="arrow" tag="a" href="/" target="_blank" color="gray" size="l" download hoverType="bg">
                            <ArrowIcon type="arrow-left" direction="left" size="14" color="black" strokeWidth="1.5"></ArrowIcon>
                        </Button>
                        <Button type="arrow" tag="a" href="/" target="_blank" color="blue" size="l" download hoverType="bg" hoverText="바로가기">
                            <ArrowIcon type="arrow-out" direction="left" size="14" color="white" strokeWidth="1.5"></ArrowIcon>
                        </Button>
                        <Button type="arrow" tag="a" href="/" target="_blank" color="white" size="l" download hoverType="bg">
                            <ArrowIcon type="arrow-out" direction="left" size="14" color="black" strokeWidth="1.5"></ArrowIcon>
                        </Button>
                        <Button type="arrow" tag="a" href="/" target="_blank" color="gray" size="l" download hoverType="bg">
                            <ArrowIcon type="arrow-out" direction="left" size="14" color="black" strokeWidth="1.5"></ArrowIcon>
                        </Button>
                    </div>
                </div>
                <div className="btn-box">
                    <div className="_caption">size="m"</div>
                    <div className="inner-box">
                        <Button type="arrow" tag="a" href="/" target="_blank" color="blue" size="m" download hoverType="open" hoverText="바로가기"> 
                            <ArrowIcon type="arrow-left" direction="left" size="24" color="white" strokeWidth="1.34"></ArrowIcon>
                        </Button>
                        <Button type="arrow" tag="a" href="/" target="_blank" color="white" size="m" download>
                            <ArrowIcon type="arrow-left" direction="left" size="24" color="black" strokeWidth="1.34"></ArrowIcon>
                        </Button>
                        <Button type="arrow" tag="a" href="/" target="_blank" color="gray" size="m" download>
                            <ArrowIcon type="arrow-left" direction="left" size="24" color="black" strokeWidth="1.34"></ArrowIcon>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="con-box">
                <div className="btn-box">
                    <div className="_caption">type="chevron" size="l"</div>
                    <div className="inner-box">
                        <Button type="arrow" tag="button" borderColor="gray" size="l"> 
                            <ArrowIcon type="chevron-left" direction="left" size="24" color="black" strokeWidth="1.5"></ArrowIcon>
                        </Button>
                        <Button type="arrow" tag="button" borderColor="gray" size="l"> 
                            <ArrowIcon type="chevron-right" direction="left" size="24" color="black" strokeWidth="1.5"></ArrowIcon>
                        </Button>
                        <Button type="arrow" tag="button" borderColor="white" size="l" hoverType="bg">
                            <ArrowIcon type="chevron-left" direction="left" size="24" color="black" strokeWidth="1.5"></ArrowIcon>
                        </Button>
                        <Button type="arrow" tag="button" borderColor="white" size="l" hoverType="bg">
                            <ArrowIcon type="chevron-right" direction="left" size="24" color="black" strokeWidth="1.5"></ArrowIcon>
                        </Button>
                        <Button type="arrow" tag="button" color="blue" size="l" hoverType="bg">
                            <ArrowIcon type="chevron-left" direction="left" size="24" color="white" strokeWidth="1.5"></ArrowIcon>
                        </Button>
                        <Button type="arrow" tag="button" color="blue" size="l" hoverType="bg">
                            <ArrowIcon type="chevron-right" direction="left" size="24" color="white" strokeWidth="1.5"></ArrowIcon>
                        </Button>
                        <Button type="arrow" tag="button" color="white" size="l" hoverType="bg">
                            <ArrowIcon type="chevron-left" direction="left" size="24" color="black" strokeWidth="1.5"></ArrowIcon>
                        </Button>
                        <Button type="arrow" tag="button" color="white" size="l" hoverType="bg">
                            <ArrowIcon type="chevron-right" direction="left" size="24" color="black" strokeWidth="1.5"></ArrowIcon>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}