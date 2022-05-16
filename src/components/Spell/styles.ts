import styled from 'styled-components'

export const List = styled.div`
display:flex;
align-items:center;
justify-content:start;
gap:15px;
height:40px;
cursor:pointer;
&:hover {
  background-color:#ACACAC;
}
.link {
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  font-size:18px;
  color: #1e1e1e;
}
li ~ li {
}
`

export const Button = styled.button`
border:none;
background-color:transparent;
cursor:pointer;
transition: opacity .2s ease-out;
svg {
  height:39px;
  width:25px;
  color: #1e1e1e;
}
&:hover{
  opacity:.5;
}
`
