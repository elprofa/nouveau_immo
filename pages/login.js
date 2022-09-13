import React from 'react'
import GET_MAISONS from '../queries/liste_maison';
import {useQuery} from '@apollo/client'



function Login() {

    const { loading, error, data } = useQuery(GET_MAISONS);

    console.log(data);

  return (
    <div>Login</div>
  )
}

export default Login