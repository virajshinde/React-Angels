import React from 'react';
import './card.styles.css';


export const Card = (props) => (
    <div className='card-container'>
        <img alt='demon' src={`https://robohash.org/${props.angel.id}?set=set2&size=180x180`}></img>
        <h2>{props.angel.name}</h2>
        <p>{props.angel.email}</p>
    </div>
)