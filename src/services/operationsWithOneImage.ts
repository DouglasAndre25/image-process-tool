export const toGrayScale = (image: ImageData) => {
  const result = new ImageData(new Uint8ClampedArray(image.data), 250, 285)

  for (let i = 0; i < result.data.length; i += 4) {
    const formula =
      0.2989 * result.data[i] + 0.587 * result.data[i + 1] + 0.114 * result.data[i + 2]
    result.data[i] = formula
    result.data[i + 1] = formula
    result.data[i + 2] = formula
  }

  return result
}

export const toBinaryScale = (image: ImageData) => {
  const result = new ImageData(new Uint8ClampedArray(image.data), 250, 285)

  for (let i = 0; i < result.data.length; i += 4) {
    if (result.data[i] && result.data[i + 1] && result.data[i + 2] <= 127) {
      result.data[i] = 0
      result.data[i + 1] = 0
      result.data[i + 2] = 0
    } else {
      result.data[i] = 255
      result.data[i + 1] = 255
      result.data[i + 2] = 255
    }
  }

  return result
}

export const toNegativeScale = (image: ImageData) => {
  const result = new ImageData(new Uint8ClampedArray(image.data), 250, 285)

  for (let i = 0; i < result.data.length; i += 4) {
    result.data[i] = 255 - result.data[i]
    result.data[i + 1] = 255 - result.data[i + 1]
    result.data[i + 2] = 255 - result.data[i + 2]
  }

  return result
}

export const toNot = (image: ImageData) => {
  const result = new ImageData(new Uint8ClampedArray(image.data), 250, 285)

  for (let i = 0; i < result.data.length; i += 4) {
    result.data[i] = 255 - result.data[i]
    result.data[i + 1] = 255 - result.data[i + 1]
    result.data[i + 2] = 255 - result.data[i + 2]
  }

  return result
}

const generateGaussianKernel = (size: number, stdDeviation: number) => {
  const kernel: number[][] = []
  const kernelOffset = Math.floor(size / 2)

  let sum = 0

  for (let y = -kernelOffset; y <= kernelOffset; y++) {
    const row: number[] = []

    for (let x = -kernelOffset; x <= kernelOffset; x++) {
      const exponent = -(x * x + y * y) / (2 * stdDeviation * stdDeviation)
      const value = Math.exp(exponent) / (2 * Math.PI * stdDeviation * stdDeviation)

      row.push(value)
      sum += value
    }

    kernel.push(row)
  }

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      kernel[y][x] /= sum
    }
  }

  return kernel
}

export const toGaussianElimination = (image: ImageData, stdDeviation: number) => {
  const width = image.width
  const height = image.height
  const data = image.data
  const filteredData = new Uint8ClampedArray(data.length)

  const kernelSize = 3
  const kernelOffset = Math.floor(kernelSize / 2)

  const kernel = generateGaussianKernel(kernelSize, stdDeviation)

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const redIndex = (y * width + x) * 4
      const greenIndex = redIndex + 1
      const blueIndex = redIndex + 2
      const alphaIndex = redIndex + 3

      let redSum = 0
      let greenSum = 0
      let blueSum = 0
      let kernelSum = 0

      for (let ky = 0; ky < kernelSize; ky++) {
        for (let kx = 0; kx < kernelSize; kx++) {
          const imageX = x + (kx - kernelOffset)
          const imageY = y + (ky - kernelOffset)

          if (imageX >= 0 && imageX < width && imageY >= 0 && imageY < height) {
            const pixelIndex = (imageY * width + imageX) * 4
            const kernelValue = kernel[ky][kx]

            kernelSum += kernelValue
            redSum += data[pixelIndex] * kernelValue
            greenSum += data[pixelIndex + 1] * kernelValue
            blueSum += data[pixelIndex + 2] * kernelValue
          }
        }
      }

      filteredData[redIndex] = Math.floor(redSum / kernelSum)
      filteredData[greenIndex] = Math.floor(greenSum / kernelSum)
      filteredData[blueIndex] = Math.floor(blueSum / kernelSum)
      filteredData[alphaIndex] = data[alphaIndex]
    }
  }

  return new ImageData(filteredData, width, height)
}
