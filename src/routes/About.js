import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';

// 내부 컴포넌트
function AboutText({title, desc, image, image2x}){
    return (
        <div>
            <div className="aiLeft">
                <img src={image} srcSet={image2x} alt={title}></img>
            </div>
            <div className="aiRight">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

const aboutMe = [
    {
        id: 1,
        title: '삶의 모토는 경쟁률에 겁내는 것이 아닌, 나 하나의 문제.',
        desc: '대학 입시를 준비하면서 처음 하고자 했던 과는 <문예 창작>이였습니다. 문예 창작을 희망한다면 누구든 1순위로 꼽는 대학교 <서울 예술대학>, 저 또한 목표는 같았습니다. 처음 과외를 시작하고 선생님께서는 저에게 무모한 도전이 될 수도 있다고 미리 말씀해 주셨습니다. 다른 과도 마찬가지겠지만, 재수는 기본이고 몇 년 이상 준비하는 입시생이 많은 문예 창작과에 고작 실기 시험 4개월을 앞두고 시작한 저에게는 무모한 도전이 아닐 수 없었으니까요. 800명 가까이 지원한 실기시험에 자신이 없었습니다. 하지만 그때 제 마음속 깊이 새긴 말은 “경쟁률이 중요한 것이 아니라, 네가 잘하고 못하고의 문제다.” 였고 저는 놀랍게도 1차 실기시험에 합격하게 되었습니다. 물론, 최종 합격까지는 가지 못했지만 고작 4개월을 준비한 저에게 문예 창작 입시생으로 보냈던 날들은 훗날 많은 도전들에 좋은 영향을 끼치게 되었습니다. 코딩에 자신이 없던 제가 이렇게 열심히 달려갈 수 있었으니까요!',
        image: '../img/about_img01.jpg',
        image2x: '../img/about_img01@2.jpg 2x, ../img/about_img01@3.jpg 3x',
    },
    {
        id: 2,
        title: '오래도록 마음에 머물렀던 코딩에 대한 기억.',
        desc: '문예 창작 입시에 실패하고 저는 <시각 디자인과>에 입학하게 되었습니다. 제가 더‘잘’할 수 있는 일이 무엇일까 생각하다 내린 결론이었죠. 손으로 만들고, 그리는 일이 전부일 줄 알았던 시각디자인과는 제 생각과 달리 모든 것을 컴퓨터로 작업하는 일이었습니다. 처음에는 내가 생각했던 일이 아니라는 것에 제 선택에 대해 다시 곱씹어 보기도 했지만, 배울수록 저는 새로운 매력에 빠져들었습니다.',
        image: '../img/about_img02.jpg',
        image2x: '../img/about_img02@2.jpg 2x, ../img/about_img02@3.jpg 3x',
    },
    {
        id: 3,
        title: '가장 매력적으로 다가왔던 코딩 수업.',
        desc: '더더욱이 수업 시간에서 다뤘던 ‘코딩’, ‘UI/UX’ 수업은 매력적이지 않을 수가 없었고요. 졸업을 하고 방황하던 제게 지난날 매력적으로 다가왔던 코딩에 대한 기억은 제가 지금 이 자리에 있도록 만들어 주었습니다. 사실 나이가 먹을수록 실패에 대한 불안감이나 겁이 많아지는데, 어느새 제게 이 일은 그걸 잊을 만큼 재미있는 일이 되어버렸습니다.',
        image: '../img/about_img03.jpg',
        image2x: '../img/about_img03@2.jpg 2x, ../img/about_img03@3.jpg 3x',
    }
]

function About(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="aboutCont">
                    <div className="container">
                        <div className="titleWrap">
                            <Title text={['about','me','about me']} />
                        </div>
                        <div className="aboutCont">
                            {aboutMe.map((txt) => (
                                 <AboutText key={txt.id} title={txt.title} desc={txt.desc} image={txt.image} image2x={txt.image2x} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default About;