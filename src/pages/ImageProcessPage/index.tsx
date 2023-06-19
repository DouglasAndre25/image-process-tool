import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'

import './styles.scss'
import ImageInput from '../../components/ImageInput'
import ProcessOneImage from '../../components/ProcessOneImage'
import ResultImageModal from '../../components/ResultImageModal'
import ProcessTwoImages from '../../components/ProcessTwoImages'

const ImageProcessPage = () => {
  const [firstImage, setFirstImage] = useState<ImageData | undefined>()
  const [secondImage, setSecondImage] = useState<ImageData | undefined>()
  const [resultImage, setResultImage] = useState<ImageData | undefined>()

  return (
    <Box>
      <Box
        bgcolor='primary.main'
        color='text.primary'
        sx={{ maxHeight: (theme) => theme.spacing(15.5) }}
      >
        <Typography
          variant='h5'
          sx={{
            padding: (theme) => theme.spacing(2),
          }}
        >
          Ferramenta de Processamento de Imagens
        </Typography>
      </Box>

      <Box display='grid' gridTemplateColumns='.5fr .5fr'>
        <Box
          display='grid'
          gridTemplateColumns='.25fr .25fr'
          justifyContent='space-around'
          sx={{ padding: (theme) => theme.spacing(3) }}
        >
          <Box>
            <ImageInput onChange={(val: ImageData) => setFirstImage(val)} />
            <ProcessOneImage image={firstImage} setResultImage={setResultImage} />
          </Box>

          <Box>
            <ImageInput onChange={(val: ImageData) => setSecondImage(val)} />
            <ProcessOneImage image={secondImage} setResultImage={setResultImage} />
          </Box>
        </Box>

        <Box sx={{ padding: (theme) => theme.spacing(3) }}>
          <ProcessTwoImages
            firstImage={firstImage}
            secondImage={secondImage}
            setResultImage={setResultImage}
          />
        </Box>
      </Box>
      {resultImage && (
        <ResultImageModal
          resultImage={resultImage}
          handleClose={() => {
            setResultImage(undefined)
          }}
        />
      )}
    </Box>
  )
}

export default ImageProcessPage
