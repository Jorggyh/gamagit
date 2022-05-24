import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Input = styled.input`
  border: 1px solid #ddd;
  height: 1.5rem;
  padding: 0 0.5rem;
  margin-top: 1rem; // Gambiarra
  border-radius: 0.25rem 0 0 0.25rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.93rem;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`
export const Button = styled.button`
  height: 1.62rem;
  border: 1px solid #000;
  background: rgb(41, 40, 40);
  color: white;
  border-radius: 0 0.25rem 0.25rem 0;
  border-color: rgb(41, 40, 40);
  margin-top: 1rem; // Gambiarra
  font-family: 'DM Sans', sans-serif;
  font-size: 0.93rem;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`
export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-family: sans-serif;
  color: rgb(41, 40, 40);
  margin-top: 5rem;
  margin-bottom: 1rem;
  font-family: 'DM Sans', sans-serif;
`
export const ErrorMsg = styled.span`
  display: block;
  font-size: 1.1rem;
  color: rgb(242, 89, 69);
  font-weight: 600;
  margin-top: 1rem;
  font-family: 'DM Sans', sans-serif;
`
