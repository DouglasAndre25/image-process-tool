import React from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import {
  toBinaryScale,
  toGrayScale,
  toNegativeScale,
  toNot,
} from '../../services/operationsWithOneImage'

interface ProcessOneImageProps {
  image?: ImageData
  setResultImage: (value: ImageData) => void
}

const ProcessOneImage = ({ image, setResultImage }: ProcessOneImageProps) => {
  const handleGrayScale = () => {
    if (image) {
      const result = toGrayScale(image)
      setResultImage(result)
    }
  }

  const handleBinaryScale = () => {
    if (image) {
      const result = toBinaryScale(image)
      setResultImage(result)
    }
  }

  const handleNegativeScale = () => {
    if (image) {
      const result = toNegativeScale(image)
      setResultImage(result)
    }
  }

  const handleNot = () => {
    if (image) {
      const result = toNot(image)
      setResultImage(result)
    }
  }

  return (
    <Card
      variant='outlined'
      sx={{ maxHeight: (theme) => theme.spacing(124), maxWidth: (theme) => theme.spacing(88) }}
    >
      <CardContent>
        <Typography variant='body1' color='primary.main'>
          Operações dessa imagem
        </Typography>

        <Box
          display='flex'
          flexDirection='column'
          sx={{ gap: (theme) => theme.spacing(2), paddingTop: (theme) => theme.spacing(2) }}
        >
          <Button variant='outlined' fullWidth disabled={!image} onClick={handleGrayScale}>
            Escala Cinza
          </Button>
          <Button variant='outlined' fullWidth disabled={!image} onClick={handleBinaryScale}>
            Escala Binária
          </Button>
          <Button variant='outlined' fullWidth disabled={!image} onClick={handleNegativeScale}>
            Escala Negativa
          </Button>
          <Button variant='outlined' fullWidth disabled={!image} onClick={handleNot}>
            Not
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProcessOneImage
