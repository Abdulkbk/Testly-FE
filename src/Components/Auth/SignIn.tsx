import { Link as RouteLink, useNavigate } from 'react-router-dom'
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  Checkbox,
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ArrowBack, LockOutlined } from '@mui/icons-material'

const theme = createTheme()

function SignIn() {
  const navigate = useNavigate()
  return (
    <ThemeProvider theme={theme}>
      {/* <Container component='main' maxWidth='xs'> */}
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Box sx={{ width: '30%' }}>
          <ArrowBack
            color='primary'
            fontSize='medium'
            onClick={() => navigate(-1)}
          />
        </Box>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box
          component='form'
          noValidate
          sx={{ mt: 1, width: '30%', minWidth: '300px', px: 1 }}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color='primary' />}
            label='Remeber me'
            defaultChecked={false}
            sx={{ width: '100%', mt: 1 }}
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs sx={{ textAlign: 'left' }}>
              <Link href='#' variant='body2'>
                Forgot password
              </Link>
            </Grid>
            <Grid item>
              <RouteLink to='/signup'>
                {/* <Link href='#' variant='body2'> */}
                {'Sign Up'}
                {/* </Link> */}
              </RouteLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* </Container> */}
    </ThemeProvider>
  )
}

export default SignIn
