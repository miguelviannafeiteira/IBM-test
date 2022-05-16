import styled from 'styled-components'

export const Container = styled.div`
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

export const Div = styled.div`
  background:#fff;
  width:100%;
  height:100%;
  max-width:400px;
  max-height:400px;
  padding:32px 48px;
  box-shadow: 0 0 60px rgba(0,0,0,.08);
  border-radius:20px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`

export const Header = styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100;
  height:40px;
  color:#1e1e1e;
  background-color:transparent;
  padding:0;
  font-size:18px;
  margin: 20px 0 10px 0;
`
export const FormContainer = styled.form`
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:15px;
`
export const FormMain = styled.main`
  margin-top:10px;
  display:flex;
  flex-direction:column;
  gap:10px;

`
export const InputGroup = styled.div`
  display:flex;
  flex-direction:column;
  gap:5px;
  label{
    font-size:18px;    
  }
  input{
    border:none;
    color:#1e1e1e;
    background-color:#f5f5f5;
    border-radius:5px;
    height:30px;
    width:100%;
    padding-left:10px
  }
`

export const Footer = styled.footer`
  display:flex;
  justify-content:center;
button {
  width:150px;
}
`
