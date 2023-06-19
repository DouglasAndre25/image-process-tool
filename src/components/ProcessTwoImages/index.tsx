import React, { useState } from 'react'
import { Card, CardContent, Typography, Box, Button, TextField } from '@mui/material'
import {
  toAdd,
  toAnd,
  toBlend,
  toDivide,
  toMultiply,
  toOr,
  toXor,
} from '../../services/operationsWithTwoImages'

interface ProcessTwoImages {
  firstImage?: ImageData
  secondImage?: ImageData
  setResultImage: (value: ImageData) => void
}

const ProcessTwoImages = ({ firstImage, secondImage, setResultImage }: ProcessTwoImages) => {
  const [blendingValue, setBlendingValue] = useState<number>(0)

  const handleAdd = () => {
    if (firstImage && secondImage) {
      const result = toAdd(firstImage, secondImage)
      setResultImage(result)
    }
  }

  const handleMultiply = () => {
    if (firstImage && secondImage) {
      const result = toMultiply(firstImage, secondImage)
      setResultImage(result)
    }
  }

  const handleSubstract = () => {
    if (firstImage && secondImage) {
      const result = toMultiply(firstImage, secondImage)
      setResultImage(result)
    }
  }

  const handleDivide = () => {
    if (firstImage && secondImage) {
      const result = toDivide(firstImage, secondImage)
      setResultImage(result)
    }
  }

  const handleAnd = () => {
    if (firstImage && secondImage) {
      const result = toAnd(firstImage, secondImage)
      setResultImage(result)
    }
  }

  const handleOr = () => {
    if (firstImage && secondImage) {
      const result = toOr(firstImage, secondImage)
      setResultImage(result)
    }
  }

  const handleXor = () => {
    if (firstImage && secondImage) {
      const result = toXor(firstImage, secondImage)
      setResultImage(result)
    }
  }

  const handleBlending = () => {
    if (firstImage && secondImage && blendingValue) {
      const result = toBlend(firstImage, secondImage, blendingValue)
      setResultImage(result)
    }
  }

  return (
    <Card variant='outlined'>
      <CardContent>
        <Typography variant='body1' color='primary.main'>
          Operações que usam as duas imagens
        </Typography>

        <Box
          display='flex'
          flexDirection='column'
          sx={{ gap: (theme) => theme.spacing(2), paddingTop: (theme) => theme.spacing(2) }}
        >
          <Button
            variant='outlined'
            fullWidth
            disabled={!firstImage || !secondImage}
            onClick={handleAdd}
          >
            Adição
          </Button>
          <Button
            variant='outlined'
            fullWidth
            disabled={!firstImage || !secondImage}
            onClick={handleMultiply}
          >
            Multiplicação
          </Button>
          <Button
            variant='outlined'
            fullWidth
            disabled={!firstImage || !secondImage}
            onClick={handleSubstract}
          >
            Subtração
          </Button>
          <Button
            variant='outlined'
            fullWidth
            disabled={!firstImage || !secondImage}
            onClick={handleDivide}
          >
            Divisão
          </Button>
          <Button
            variant='outlined'
            fullWidth
            disabled={!firstImage || !secondImage}
            onClick={handleAnd}
          >
            And
          </Button>
          <Button
            variant='outlined'
            fullWidth
            disabled={!firstImage || !secondImage}
            onClick={handleOr}
          >
            Or
          </Button>
          <Button
            variant='outlined'
            fullWidth
            disabled={!firstImage || !secondImage}
            onClick={handleXor}
          >
            Xor
          </Button>
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='center'
            sx={{ gap: (theme) => theme.spacing(2) }}
          >
            <TextField
              variant='outlined'
              type='number'
              value={blendingValue}
              onChange={(event) => setBlendingValue(parseInt(event.target.value))}
              disabled={!firstImage || !secondImage}
              fullWidth
            />
            <Button
              variant='outlined'
              disabled={!firstImage || !secondImage || !blendingValue}
              onClick={handleBlending}
            >
              Blending
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProcessTwoImages
