import React, { useState } from 'react'
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import {
  toBinaryScale,
  toGaussianElimination,
  toGrayScale,
  toNegativeScale,
  toNot,
} from '../../services/operationsWithOneImage'

interface ProcessOneImageProps {
  image?: ImageData
  setResultImage: (value: ImageData) => void
}

const ProcessOneImage = ({ image, setResultImage }: ProcessOneImageProps) => {
  const [sigmaValue, setSigmaValue] = useState('')

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

  const handleGaussElimination = () => {
    if (image && sigmaValue) {
      const result = toGaussianElimination(image, parseFloat(sigmaValue))
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
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='center'
            sx={{ gap: (theme) => theme.spacing(2) }}
          >
            <TextField
              variant='outlined'
              value={sigmaValue}
              onChange={(event) => {
                const inputValue = event.target.value
                if (/^\d*\.?\d*$/.test(inputValue)) {
                  setSigmaValue(inputValue)
                }
              }}
              disabled={!image}
              sx={{ maxWidth: (theme) => theme.spacing(22) }}
            />
            <Button
              variant='outlined'
              fullWidth
              disabled={!image || !sigmaValue}
              onClick={handleGaussElimination}
            >
              Eliminação de Gauss
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProcessOneImage
