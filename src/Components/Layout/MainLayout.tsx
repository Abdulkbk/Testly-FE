import { Container } from '@mui/material'
import { createTheme } from '@mui/material/styles'

const theme = createTheme()

function MainLayout({ children }: any) {
  return (
    <>
      <Container component='section'>Dashboard</Container>
      <Container component='section'>{children}</Container>
    </>
  )
}

export default MainLayout
