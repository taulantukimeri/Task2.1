import React, { Component } from 'react';
import './App.css'
import Logo from './logo.svg'

import Accordion from './Accordion';

const accordions = [
  {
    title: 'How does Parkname seperate itself from other domain name parking companies?',
    description: 'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portofolio.' 
    
  },
  {
    title: 'Is Parkname Parking actually free?',
    description: 'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portofolio.'
  },
  {
    title: 'What you do?',
    description: 'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portofolio.'
  },
  {
    title: 'When was Parkname first founded?',
    description: 'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portofolio.'
  },
]

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Accordion
          key='single-accordion'
          title='Why park a domain name in park name?'
          description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        />
      <br />
      
      <Accordion
          key='multi-accordion'
          title={
            <div className='about-us-title-section'>
              <img className='react-logo 'src={Logo} />
              <div>
                <h1>About Us</h1>
                <p>{accordions.length} articles in this topic</p>
                </div>
            </div>
          }
          description={
              accordions.map((A) => (
              <Accordion
                key={A.title}
                title={A.title}
                description={A.description}
              />
            ))
          }
        />
      
      </div>
    );
  }
}

export default App;
