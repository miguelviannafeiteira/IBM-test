import styled from 'styled-components'

export const Container = styled.div`
 position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  display:flex;
  flex-direction:column;
  justify-content:start;
  align-items:center;
  background:#E9E9E9;
  overflow-y:auto;
  ::-webkit-scrollbar {
  width: 10px;
}
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #b4ecb4;
    border-radius: 10px;
  }
`

export const Header = styled.header`
height:60px;
width:500px;
display:flex;
justify-content:space-between;
align-items:center;
background-color:rgba(244,243,245, .6);
box-shadow: 0 0 60px rgba(0,0,0,.1);
padding-left:10px;
padding-right:10px;
border-radius:5px;

@media (max-width: 520px) {
  flex-direction:column;
  justify-content:center;
  width:300px;
  height:120px;
  gap:15px;
}

.button {
  width:220px;
  margin:0;
}


`

export const List = styled.div`
background-color:rgba(244,243,245, .6);
box-shadow: 0 0 60px rgba(0,0,0,.1);
width:500px;
margin-top:20px;
border-radius:5px;

@media (max-width: 520px) {
  width:300px;
  gap:15px;
}

ul {
  li ~ li {
  border-top: 1px solid rgba(119, 122, 146, 0.3);
}
}
`
