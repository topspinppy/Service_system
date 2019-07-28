import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import { LoginForm } from '../../container'

const Background = require('../../core/img/tool_bg.jpg')

const ContainerLogin = styled.div`
  background-image: url(${Background});
  width: 100%;
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const ContainerSpecify = styled(Container)`
  display: flex;
  justify-content: center;
`

// eslint-disable-next-line import/prefer-default-export
export const Login = () => {
  return (
    <ContainerLogin img={Background}>
      <ContainerSpecify>
        <LoginForm />
      </ContainerSpecify>
    </ContainerLogin>
  )
}
