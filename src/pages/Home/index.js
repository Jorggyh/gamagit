import React, { useState } from 'react'
import axios from 'axios'
import * as S from './styled'
import { useNavigate } from 'react-router-dom'
import logo from '../../img/detectiveWithGlasses.png'

function App(props) {
  const [usuario, setUsuario] = useState()
  const [erro, setErro] = useState(false)
  let navigate = useNavigate()

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then(Response => {
        const repositories = Response.data
        const repositoriesName = []
        repositories.map(repository => {
          repositoriesName.push(repository.name)
        })
        localStorage.setItem(
          'repositoriesName',
          JSON.stringify(repositoriesName)
        )
        setErro(false)
        navigate('/repositories')
      })
      .catch(err => {
        setErro(true)
      })
  }

  return (
    <S.HomeContainer>
      <S.Title>Detetive GitHub</S.Title>
      <img
        src={logo}
        alt="Imagem de um detetive procurando repositórios"
        height="295rem"
      />
      <S.Content>
        <S.Input
          className="usuarioInput"
          placeholder="Usuários"
          value={usuario}
          onChange={e => setUsuario(e.target.value)}
        />
        <S.Button type="button" onClick={handlePesquisa}>
          Pesquisar
        </S.Button>
      </S.Content>
      {erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ''}
    </S.HomeContainer>
  )
}

export default App
