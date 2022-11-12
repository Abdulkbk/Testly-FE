import { Link as RouteLink, useNavigate } from 'react-router-dom'
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ArrowBack } from '@mui/icons-material'

const theme = createTheme()

function SignUp() {
  const navigate = useNavigate()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Container component='main' maxWidth='xs'> */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw',
          // bgcolor: 'green',
        }}
      >
        <Box sx={{ width: '30%' }}>
          <ArrowBack
            color='primary'
            fontSize='medium'
            onClick={() => navigate(-1)}
          />
        </Box>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box
          component='form'
          sx={{ mt: 1, width: '30%', minWidth: '300px', px: 1 }}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            id='name'
            label='Full Name'
            name='name'
            autoComplete='name'
            autoFocus
            size='small'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            size='small'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='password'
            label='Password'
            name='password'
            size='small'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='password'
            label='Confirm Password'
            name='confirm_password'
            size='small'
          />

          <Button type='submit' fullWidth variant='contained' sx={{ mt: 2 }}>
            Sign up
          </Button>
          <Grid container>
            <Grid item marginTop={2}>
              <RouteLink to='/signin'>
                <Link>{'Already have an account? Sign in'}</Link>
              </RouteLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* </Container> */}
    </ThemeProvider>
  )
}

export default SignUp
