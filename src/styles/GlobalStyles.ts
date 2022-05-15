import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif,
    sans-serif;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  #root {
    height: 100vh;
  }
  ul, li {
    list-style: none;
  }
  .button{
    display:flex;
    align-items:center;
    justify-content:center;
    background:#b4ecb4;
    color:#1e1e1e;
    border:none;
    border-radius:6px;
    width:100px;
    height:35px;
    font-weight:700;
    margin-bottom: 30px;
    cursor: pointer;
    transition: opacity .2s;
    &:hover{
      opacity:.5;
    }
  }  
  .error {
    text-align:center;
    color: #D60000;
  }
  .sucess {
    text-align:center;
    color: #49AE45;
  }
`
