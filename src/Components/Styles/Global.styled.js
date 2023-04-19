import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
box-sizing:border-box;
}
body{
    background :#fff;
    color : hsl(192,100%,9%);
    font-size:1.15em;
    margin:0;
}
p{
    opacity:0.6;
    line-height:1.5;
}
img {
    max-width:100%
}

`