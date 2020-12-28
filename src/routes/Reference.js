import React from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

function ReferInfo({id, title, desc, category, property, element}){
    return (
        <li>
            <Link to= {{
                pathname: 'reference-detail',
                state: {id, title, desc, category, property, element}
            }}>
                <span className="alpha">{id}</span>
                <span className="tag">{title}</span>
                <span className="desc">{desc}</span>
            </Link>
        </li>
    )
}

class Reference extends React.Component {
    state = {
        isLoading: true,
        refer: [],
        referHtml: []
    }
    getRefer = async () => {
        const {
            data: {
                data: { refer }
            },
        } = await axios.get("https://heemwon.github.io/dothome1/refer.json")
        //console.log(refer)
        this.setState({ refer: refer, isLoading: false });
    }
    getReferHtml = async () => {
        const {
            data: {
                data: { referHtml },
            },
        } = await axios.get("https://heemwon.github.io/dothome1/refer1.json")
        console.log(referHtml)
        this.setState({referHtml: referHtml});
    }
    
    componentDidMount(){
        setTimeout(() => {
            this.getRefer();
        },1000);
    }

    render(){
        const { refer, referHtml, isLoading } = this.state;
        return (
            <div id="wrap">
                <Header color="white" />
                { isLoading ? (
                    <div className="loading">
                        <Loading />
                    </div>
                ) : (
                    <main id="main">
                        <section id="referCont">
                            <div className="container">
                                <div className="titleWrap">
                                    <Title text={['Reference','book','Reference book']} />
                                </div>
                                <div className="referCont">
                                    <h2>HTML</h2>
                                    <ul>
                                        {referHtml.map((info) => (
                                            <ReferInfo 
                                                key={info.id}
                                                id={info.id}
                                                title={info.title}
                                                desc={info.desc}
                                                category={info.category}
                                                property={info.property}
                                                element={info.element}
                                            />
                                        ))}
                                    </ul>
                                    <h2 className="javascript">Javascript</h2>
                                    <ul>
                                        {refer.map((info) => (
                                            <ReferInfo 
                                                key={info.id}
                                                id={info.id}
                                                title={info.title}
                                                desc={info.desc}
                                                category={info.category}
                                                property={info.property}
                                                element={info.element}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </main>
                )}
                <Footer />
            </div>
        )
    }
}
export default Reference;