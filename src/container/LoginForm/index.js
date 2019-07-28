/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react'
import { Button, Label, Input, Form } from 'reactstrap'
import { loginToSystem } from '../../model/user'
import styled from 'styled-components'

const WrapLogin = styled.div`
  width: 390px;
  background: white;
  border-radius: 25px;
  padding: 20px;
`
const WrapLoginButton = styled.div`
  width: 100%;
  margin: 10px 0;
`
const LoginButton = styled(Button)`
  width: 100%;
  cursor: pointer;
`

export const LoginForm = () => {
  // eslint-disable-next-line no-alert
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // eslint-disable-next-line no-shadow
  const checkLogin = async (usernames, passwords) => {
    const key = await loginToSystem({
      username: usernames,
      password: passwords,
    })
    const { data } = key
    localStorage.setItem('keys', JSON.stringify(data))
  }
  return (
    <WrapLogin>
      <Form>
        <Label for="username">ชื่อผู้ใช้ : </Label>
        <Input
          type="text"
          name="username"
          onChange={e => setUsername(e.target.value)}
        />
        <Label for="username">รหัสผ่าน : </Label>
        <Input
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
          autoComplete="on"
        />
        <WrapLoginButton>
          <LoginButton
            outline
            color="success"
            onClick={() => checkLogin(username, password)}
          >
            เข้าสู่ระบบ
          </LoginButton>
        </WrapLoginButton>
      </Form>
    </WrapLogin>
  )
}
