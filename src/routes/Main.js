import React from 'react'
import Header from '../components/Header'

function Main(){
    return (
        <div id="wrap">
            <Header />
            <main id="main">
                <section id="mainCont">
                    <div className="container">
                        <div className="mainCont">
                            <div>
                                <h1>
                                    <div><span>i'll be on</span></div>
                                    <div><span>your </span><span className="white"> side.</span></div>
                                    <div><span>let's</span></div>
                                    <div><span>be together.</span></div>
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Main