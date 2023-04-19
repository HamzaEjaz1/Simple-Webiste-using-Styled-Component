import React from 'react'
import { Container } from './Components/Styles/Container.styled'
import Header from './Components/Header'
import { GlobalStyle } from './Components/Styles/Global.styled'
import Content from './Content'
import Card from './Card.jsx'
import { StyledCard } from './Components/Styles/Card.styled'


const rmainCad= (val)=>{
  return(
    <Card
    title={val.title}
    body={val.body}
    image={val.image}
    />
  )

  
}

const App = () => {
  return (
  <>
  <GlobalStyle/>
  <Header>

  </Header>

  <Container>
  

{Content.map(rmainCad)
  }
  


  </Container>

  </>
  )
}

export default App