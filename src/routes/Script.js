import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';

function ScriptInfo({title, source}){
    return(
        <div className="script">
            <div className="script-left">
                <h3>{title}</h3>
            </div>
            <div className="script-right">
                <div className="view">
                    <iframe title={title} src={source}></iframe>
                </div>
                <div className="num">
                    <ul>
                        <li className="active"><span>1</span></li>
                        <li><span>2</span></li>
                        <li><span>3</span></li>
                        <li><span>4</span></li>
                        <li><span>5</span></li>
                        <li><span>6</span></li>
                        <li><span>7</span></li>
                        <li><span>8</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

// 정보 객체 만들기
const siteData = [
    {
        id: '1',
        title: 'mouse effect script',
        source: [
            "https://heemwon.github.io/dothome1/effect/port/mouseEffect01.html",
            "https://heemwon.github.io/dothome1/effect/port/mouseEffect02.html",
            "https://heemwon.github.io/dothome1/effect/port/mouseEffect03.html",
            "https://heemwon.github.io/dothome1/effect/port/mouseEffect04.html",
            "https://heemwon.github.io/dothome1/effect/port/mouseEffect05.html",
            "https://heemwon.github.io/dothome1/effect/port/mouseEffect06.html",
            "https://heemwon.github.io/dothome1/effect/port/mouseEffect07.html",
            "https://heemwon.github.io/dothome1/effect/port/mouseEffect08.html",
        ]
    },
    {
        id: '2',
        title: 'parallax effect script',
        source: [
            "https://heemwon.github.io/dothome1/effect/port/parallaxEffect01.html",
            "https://heemwon.github.io/dothome1/effect/port/parallaxEffect02.html",
            "https://heemwon.github.io/dothome1/effect/port/parallaxEffect03.html",
            "https://heemwon.github.io/dothome1/effect/port/parallaxEffect04.html",
            "https://heemwon.github.io/dothome1/effect/port/parallaxEffect05.html",
            "https://heemwon.github.io/dothome1/effect/port/parallaxEffect06.html",
            "https://heemwon.github.io/dothome1/effect/port/parallaxEffect07.html",
            "https://heemwon.github.io/dothome1/effect/port/parallaxEffect08.html",
        ]
    },
    {
        id: '3',
        title: 'slide effect script',
        source: [
            "https://heemwon.github.io/dothome1/effect/port/sliderEffect01.html",
            "https://heemwon.github.io/dothome1/effect/port/sliderEffect02.html",
            "https://heemwon.github.io/dothome1/effect/port/sliderEffect03.html",
            "https://heemwon.github.io/dothome1/effect/port/sliderEffect04.html",
            "https://heemwon.github.io/dothome1/effect/port/sliderEffect05.html",
            "https://heemwon.github.io/dothome1/effect/port/sliderEffect06.html",
            "https://heemwon.github.io/dothome1/effect/port/sliderEffect07.html",
            "https://heemwon.github.io/dothome1/effect/port/sliderEffect08.html",
        ]
    }
]

function Script(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="scriptCont">
                    <div className="container">
                        <div className="titleWrap">
                            <Title text={['Script Reference','Book','Script Reference Book']} />
                        </div>
                        <div className="scriptCont">
                            {siteData.map((site)=>{
                                return <ScriptInfo
                                    key={site.id}
                                    title={site.title}
                                    source={site.source[1]}
                                />
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Script;