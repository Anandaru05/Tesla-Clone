import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
  <Container>
    <Section 
        title = "Model-S"
        Description = "Order Online for Toughless Delivery"
        backgroundImg = "model-s.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing inventory"
    
    />
    <Section 
        title = "Model-y"
        Description = "Order Online for Toughless Delivery"
        backgroundImg = "model-y.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing inventory"
    />
    <Section 
            title = "Model-X"
            Description = "Order Online for Toughless Delivery"
            backgroundImg = "model-x.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing inventory"
    />
    <Section 
            title = "Model-3"
            Description = "Order Online for Toughless Delivery"
            backgroundImg = "model-3.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing inventory"
    />
    <Section 
            title = "Lowest Cost Solar Panels in America"
            Description = " Money-back Guarentee"
            backgroundImg = "solar-panel.jpg"
            leftBtnText = "Order now"
            rightBtnText = "Learn more"
    />
    <Section 
            title = "Solar for New Roofs"
            Description = " Solar Roof Cost Less Than a New Roof Plus Solar Panels"
            backgroundImg = "solar-roof.jpg"
            leftBtnText = "Order now"
            rightBtnText = "Learn more"
    />
    <Section 
            title = "Accessories"
            Description = " "
            backgroundImg = "accessories.jpg"
            leftBtnText = "Shop now"
    />
    
       
  </Container>
  
  )
}

export default Home;

const Container = styled.div`
    height : 100vh;
    
`