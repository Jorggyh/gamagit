import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`
export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-family: sans-serif;
  color: #333;
  font-family: 'DM Sans', sans-serif;
`
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`
export const ListItem = styled.li`
  margin: 0.5rem 0;
  background: rgb(41, 40, 40);
  border-radius: 0.25rem;
  color: white;
  padding: 0.5rem;
  font-family: 'DM Sans', sans-serif;
`
export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: rgb(41, 40, 40);
  border-radius: 0.25rem;
  padding: 0.5rem 0;
  color: white;
  text-decoration: none;
  font-family: 'DM Sans', sans-serif;
`
