import React, { Component } from "react";
import Slider from "react-slick";
import '../css/slick.css'
export default function SlickEx (){
  
    const settings = {
      // rows: 2,
      
    //   autoplay: true,
      // centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2
    };

    const items = [
        {
            name: "아바타 물의 길",
            imagAddr: "https://movie-phinf.pstatic.net/20221215_185/1671091761840XXpCR_JPEG/movie_image.jpg?type=m886_590_2",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "눈의 여왕5: 스노우 프린세스와 미러랜드의 비밀",
            imagAddr: "https://movie-phinf.pstatic.net/20221221_206/16715988070200qULF_JPEG/movie_image.jpg?type=m886_590_2",
            description: "Hello World!"
        },
        {
            name: "원피스 필름 레드",
            imagAddr: "https://movie-phinf.pstatic.net/20221026_289/16667529839791pDb6_JPEG/movie_image.jpg?type=m886_590_2",
            description: "Hello World!"
        },
        {
            name: "영웅",
            imagAddr: "https://movie-phinf.pstatic.net/20221213_158/1670910727328mpqYu_JPEG/movie_image.jpg?type=m886_590_2",
            description: "Hello World!"
        },
        {
            name: "극장판 뽀로로와 친구들: 바이러스를 없애줘!",
            imagAddr: "https://movie-phinf.pstatic.net/20221108_225/1667872338018ez9cs_JPEG/movie_image.jpg?type=m886_590_2",
            description: "Hello World!"
        },
        {
            name: "핑크퐁 시네마 콘서트 2: 원더스타 콘서트 대작전",
            imagAddr: "https://movie-phinf.pstatic.net/20221202_153/1669953228662UNouH_JPEG/movie_image.jpg?type=m886_590_2",
            description: "Hello World!"
        }
    ];

    return (
        <div style={{marginLeft: '20%', marginRight: '20%'}}>

            <h3> 무비 차트</h3>
            <Slider {...settings}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
            </Slider>
      </div>
    );
}

function Item(props)
{
    return (
        <div>
            <img src={props.item.imagAddr} style={{width: '87%', height: 'auto'}} />
            {/* {<h6>{props.item.name}</h6>} */}
        </div>
    )
}