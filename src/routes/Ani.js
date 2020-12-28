import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';

function AniInfo({title, source, source2 , source3}) {
    return(
        <div className="ani">
            <div>
                <h2>{title}</h2>
                <iframe  className="view" scrolling="no" title={title} src={source}></iframe>
            </div>
        </div>
    )
}

const AniData = [
    {
        id: '1',
        title: 'Bar Animation',
        source: "https://heemwon.github.io/dothome1/animation/port/animation01.html",
    },
    {
        id: '2',
        title: 'wave circle Animation',
        source: "https://heemwon.github.io/dothome1/animation/port/animation02.html",
    },
    {
        id: '3',
        title: 'heart Animation',
        source: "https://heemwon.github.io/dothome1/animation/port/animation03.html",
    },
    {
        id: '4',
        title: 'cube Animation',
        source: "https://heemwon.github.io/dothome1/animation/port/animation04.html",
    },
    {
        id: '5',
        title: 'rocket Animation',
        source: "https://heemwon.github.io/dothome1/animation/port/animation05.html",
    },
    {
        id: '6',
        title: 'watch-face Animation',
        source: "https://heemwon.github.io/dothome1/animation/port/animation06.html",
    },
    {
        id: '7',
        title: 'disco Animation',
        source: "https://heemwon.github.io/dothome1/animation/port/animation07.html",
    },
    {
        id: '8',
        title: 'loading Animation',
        source: "https://heemwon.github.io/dothome1/animation/port/animation08.html",
    },
    {
        id: '9',
        title: 'tail Animation',
        source: "https://heemwon.github.io/dothome1/animation/port/animation09.html",
    },
    {
        id: '10',
        title: 'tentacle Animation',
        source: "https://heemwon.github.io/dothome1/animation/port/animation11.html",
    },
    {
        id: '11',
        title: 'gsap Animation01',
        source: "https://heemwon.github.io/dothome1/animation/port/animation12.html",
    },
    {
        id: '12',
        title: 'gsap Animation02',
        source: "https://heemwon.github.io/dothome1/animation/port/animation13.html",
    },
    {
        id: '13',
        title: 'gsap Animation03',
        source: "https://heemwon.github.io/dothome1/animation/port/animation14.html",
    },
]

function Ani(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="aniCont">
                    <div className="container">
                        <div className="titleWrap">
                            <Title text={['Animation','book','Animation book']} />
                        </div>
                        <div className="aniCont">
                            {AniData.map((site)=>{
                                return <AniInfo
                                    key={site.id}
                                    title={site.title}
                                    source={site.source}
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
export default Ani;