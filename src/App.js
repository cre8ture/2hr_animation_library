import React from 'react';
import GridComponent from './components/Layout';
import VerticalTwoStack from './components/VerticalTwoStack';
import { animationExamples } from './data/animationExamples';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css"


const App = () => {

  
  return (
    <>
      <Header/>
    
    <GridComponent>
      {animationExamples.map((example, index) => (
        <VerticalTwoStack
          key={index}
          title={example.title}
          code={example.code}
          text={example.text}
        />
      ))}
    <Footer />

    </GridComponent>
    </>

  );
};

export default App;