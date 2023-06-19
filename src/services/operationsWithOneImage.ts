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
