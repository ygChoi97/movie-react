import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export default function CarouselEx(props)
{
    var items = [
        {
            name: "Random Name #1",
            imagAddr: "https://movie-phinf.pstatic.net/20221215_185/1671091761840XXpCR_JPEG/movie_image.jpg?type=m886_590_2",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            imagAddr: "https://movie-phinf.pstatic.net/20221221_206/16715988070200qULF_JPEG/movie_image.jpg?type=m886_590_2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel animation='slide'>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <img src={props.item.imagAddr} style={{width: '20%', height: 'auto'}} />
        </Paper>
    )
}