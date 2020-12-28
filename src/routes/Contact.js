import React from 'react'
import Header from '../components/Header'

function Contact(){
    return (
        <div id="wrap">
            <Header />
            <main id="main">
                <section id="contactCont">
                    <div className="container">
                        <div className="contactCont">
                            <div className="contLeft">
                                <div className="title">
                                    <p>ONLY IF YOU FINDED TO ME,</p>
                                    <p>OUR MEETING</p>
                                    <p>WOULD BE MEANINGFUL </p>
                                    <p>TO ME.</p>
                                </div>
                                <div className="info">
                                    <div>ehw603@naver.com</div>
                                    <div>+82 10 9918 6603</div>
                                </div>
                                <div className="sns">
                                    <div><a href="https://instagram.com/heemwon/">instagram</a></div>
                                    <div><a href="http://heemwon.dothome.co.kr/">dothome</a></div>
                                </div>
                            </div>
                            <div className="contRight">
                                <img src="../img/contact_img.jpg" srcSet="../img/contact_img@2.jpg 2x, ../img/contact_img@3.jpg 3x" alt="이미지"></img>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Contact