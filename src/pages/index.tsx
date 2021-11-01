import React from 'react'

import type { NextPage } from 'next'
import { TextForm } from '../components/forms/TextForm'
import { TextFormRegister } from '../components/forms/TextFormRegister'
import Grid from '@mui/material/Grid'

const Home: NextPage = () => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <TextForm />
      </Grid>
      <Grid item xs={4}>
        <TextFormRegister />
      </Grid>
    </Grid>
  )
}

export default Home
