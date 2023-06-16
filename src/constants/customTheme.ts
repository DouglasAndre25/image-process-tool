import { Theme } from '@mui/material'
import { deepPurple, indigo } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const customTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: deepPurple,
    secondary: indigo,
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
})

export default customTheme
