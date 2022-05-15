import styled from 'styled-components'

export const Container = styled.section`
  background:rgba(244,243,245, .6);
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const Main = styled.main`
  background:#fff;
  width:100%;
  height:100%;
  max-width:270px;
  max-height:250px;
  padding:32px 48px;
  box-shadow: 0 0 60px rgba(0,0,0,.08);
  border-radius:20px;
  display:flex;
  flex-direction:column;
 justify-content:center;
 align-items:center;
`

export const Div = styled.div`
 display:grid;
 gap:30px;
`
