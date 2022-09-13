import { Grid } from '@mui/material'
import React from 'react'
import PageHeader from '../../components/pageHeader'

function DetailMaison(props) {

    console.log(props)
  return (
    
    <>
        <PageHeader title={"Maisons disponibles"} />
        <Grid container spacing={0}>

        </Grid>
    </>
  )
}

export default DetailMaison