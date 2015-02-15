import React from 'react';
import Card from './card';
import model from '../test.yml';
import model2 from '../test.yml';

let cardsStyle = {
  backgroundColor: 'red',
  display: 'block',
  height: '100vh',
  float: 'left'
}

class Cards extends React.Component {
  render() {
    return (
     <section style={cardsStyle}>
       <Card model={model}/>
       <Card model={model2}/>
     </section>
    )
  }
};

export default Cards;