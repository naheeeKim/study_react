import React from "react";
import '../../style/pages/guide/index.scss';
import Grid from "./grid";
import ComponentsGuide from "./componentsGuide";
import TabGuide from "./tabGuide";
import Zustand from "./zustand";


export default function Guide(){
    return(
    <>
        <div id="guideMain">
            <Grid />
            <ComponentsGuide />
            <TabGuide />
            <Zustand />
        </div>
    </>
    )
}