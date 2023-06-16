import React from 'react'
import { Box, Typography } from '@mui/material'

import './styles.scss'

const ImageProcessPage = () => {
  return (
    <div>
      <Box
        bgcolor='primary.main'
        color='text.primary'
        sx={{ maxHeight: (theme) => theme.spacing(15.5) }}
      >
        <Typography
          variant='h5'
          sx={{
            paddingTop: (theme) => theme.spacing(4),
            paddingLeft: (theme) => theme.spacing(2),
          }}
        >
          Ferramenta de Processamento de Imagens
        </Typography>
      </Box>
    </div>
  )
}

export default ImageProcessPage
