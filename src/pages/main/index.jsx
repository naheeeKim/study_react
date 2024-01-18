import React from "react";
import "../../style/pages/main/index.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from "../components/Button";
import ArrowIcon from "../components/ArrowIcon";

export default function Main(){
    return(
    <>
        <section className="wrapper">
            <div id="main">
                <section id="kv">
                    <div className="content-container">
                        <div className="main-kv-container">
                            <div className="main-kv-top row">
                                <div className="main-kv-slide-box col-9 col-md-6">
                                    <Swiper
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        className="main-kv-slide"
                                    >
                                        <SwiperSlide>
                                            <div className="main-kv-slide-item">
                                                <div className="bg">
                                                    <div className="bg-inner"><img src="/images/temp/bg_main_kv_temp02.jpg" alt="" /></div>
                                                </div>
                                                <div className="main-kv-slide-txt-box">
                                                    <span className="tag" data-size="l" data-color="white">서민금융진흥원 소개</span>
                                                    <h1 className="headline1 tit">
                                                        안정적인 금융생활의 첫걸음, <br /> 서민금융진흥원에서 시작하세요
                                                    </h1>
                                                    <Button type="arrow" tag="a" href="/" color="white" size="l" hoverType="open" hoverText="바로가기">
                                                        <ArrowIcon type="arrow-left" direction="left" size="16" color="black" strokeWidth="1.5"></ArrowIcon>
                                                    </Button>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="main-kv-slide-item">
                                                <div className="bg">
                                                    <div className="bg-inner"><img src="/images/temp/bg_main_kv_temp01.jpg" alt="" /></div>
                                                </div>
                                                <div className="main-kv-slide-txt-box">
                                                    <span className="tag" data-size="l" data-color="white">서민금융진흥원 소개</span>
                                                    <h1 className="headline1 tit">
                                                        안정적인 금융생활의 첫걸음, <br /> 서민금융진흥원에서 시작하세요
                                                    </h1>
                                                    <Button type="arrow" tag="a" href="/" color="white" size="l" hoverType="open" hoverText="바로가기">
                                                        <ArrowIcon type="arrow-left" direction="left" size="16" color="black" strokeWidth="1.5"></ArrowIcon>
                                                    </Button>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="main-kv-menu-box col-3 col-md-6">
                                    <div className="main-kv-menu">
                                        <a href="#" className="main-kv-menu-item" data-color="skyblue">
                                            <div className="inner">     
                                                <div className="txt-box">
                                                    <span className="tag" data-size="l" data-color="gray">상품출시</span>
                                                    <strong className="tit title3">청년도약계좌</strong>
                                                </div>
                                                <span className="icon"><img src="/images/main/img_main_kv_menu01.png" alt="청년도약계좌 관련 꾸밈 그래픽" /></span>
                                            </div>
                                        </a>
                                        <a href="#" className="main-kv-menu-item" data-color="green">
                                            <div className="inner">     
                                                <div className="txt-box">
                                                    <span className="tag" data-size="l" data-color="gray">상품출시</span>
                                                    <strong className="tit title3">소액생계비 대출</strong>
                                                </div>
                                                <span className="icon"><img src="/images/main/img_main_kv_menu02.png" alt="소액생계비 대출 관련 꾸밈 그래픽" /></span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </>
    )
}