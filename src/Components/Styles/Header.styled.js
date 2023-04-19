import styled from "styled-components";

export const StyeldHeader = styled.header`
background-color:#ebfbff;
padding: 40px 0;
width:100%;


`;
export const Nav = styled.nav`
display:flex;
align-items:center;
justify-content:space-around;
margin-bottom:40px;
@media(max-width:750px){
    flex-direction:column;
}
`;
export const Logo = styled.img`
@media(max-width:750px){
  margin-bottom:40px;
}

`;
export const Image = styled.img`
width:375px;
margin-left:40px;
@media(max-width:750px){
  margin:40px 0px 30px 0px;
}
`