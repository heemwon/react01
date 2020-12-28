import React from 'react'
import axios from 'axios';
import SiteInfo from '../components/SiteInfo';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

class Site extends React.Component {
    state = {
        isLoading: true,
        site: []
    };

    getSites = async () => {
        const { 
            data: {
                data: { ports },
            },
        } = await axios.get("https://heemwon.github.io/dothome1/site.json");
        this.setState( { ports, isLoading: false });
    }

    componentDidMount(){
        setTimeout(() => {
            this.getSites();
        },1000);
    }

    render(){
        const { isLoading, ports } = this.state;
        return (
            <div id="wrap">
                <Header />
                { isLoading ? 
                    (
                        <div className="loading">
                            <Loading />
                        </div>
                    ):(
                        <main id="main">
                            <section id="siteCont">
                                <div className="container">
                                    <div className="titleWrap">
                                        <Title text={['Site','Reference','Site Reference']} />
                                    </div>
                                    <div className="siteCont">
                                        { ports.map(port => (
                                            <SiteInfo
                                            key={port.id}
                                            id={port.id}
                                            link={port.link}
                                            image={port.image}
                                            title={port.title}
                                            category={port.category}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </main>
                    )
                }
                <Footer />
            </div>
        )
    }
}

export default Site