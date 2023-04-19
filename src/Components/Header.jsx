import React from 'react'
import { StyeldHeader,Nav , Logo ,Image } from './Styles/Header.styled'
import { Container } from './Styles/Container.styled'
import { Button } from './Styles/Button.styled'
import { Flex } from './Styles/Flex.styled'
const Header = () => {
  return (
    <>
   <StyeldHeader bg="royalblue">
    <Container>
      <Nav>
        <Logo src="./images/logo.svg"/>
       <Button bg="#fff">Tree it Free</Button>
      </Nav>
<Flex>
  <div>
<h1>    Build the Community Your fans Will Love</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi libero alias itaque laborum necessitatibus recusandae ipsa aperiam ab in, odit tenetur dignissimos nobis maiores soluta numquam qui cumque! Qui, culpa!

  <br /><br />

  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nesciunt ipsa, sapiente assumenda asperiores ipsum iure voluptatem quibusdam quis quae omnis voluptas autem, eos exercitationem provident accusantium explicabo iste mollitia?
</p>
<Button bg='#ff0099' color="#fff" >Get Started For Free</Button>
  </div>

  <Image src="./images/illustration-mockups.svg"/>
</Flex>


    </Container>

   </StyeldHeader>
       
    </>
  )
}

export default Header