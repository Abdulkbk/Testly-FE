import { Link } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

function Index() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        component='main'
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '70%', height: '50%' }}>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            direction='column'
            sx={{ width: '100%', height: '100%' }}
          >
            <Grid item>
              <Typography
                component='h1'
                color='primary'
                variant='h1'
                fontWeight='bold'
              >
                Testly
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                component='p'
                variant='body1'
                color='primary'
                fontWeight='semibold'
                fontSize='20px'
              >
                Test now, Ace later
              </Typography>
            </Grid>
            <Grid item>
              <Grid container mt={2}>
                <Link to='/signin'>
                  <Button variant='contained' sx={{ mx: 1 }}>
                    Sign in
                  </Button>
                </Link>
                <Link to='/signup'>
                  <Button variant='contained' color='success' sx={{ mx: 1 }}>
                    Sign up
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Index
