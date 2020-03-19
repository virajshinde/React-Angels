import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component'

export const CardList = (props) => {
return(
    //console.log(props),
    <h1>Hello</h1>,
    <div className='card-list'>
        {props.angels.map(angel => (
          <Card key='angel.id' angel={angel}></Card>
        ))}
    </div>
    )
}