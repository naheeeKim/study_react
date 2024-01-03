import React from "react";
import Tag from "./components/tag"


export default function Guide(){
    return(
    <>
        <div className="content-container">
            <h1 className="guide-tit">Guide</h1>
            <Tag color="white" disabled="true" size="l">서민금융진흥원 소개</Tag>
        </div>
    </>
    )
}