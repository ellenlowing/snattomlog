import { useEffect, useState } from 'react'
import useWindowDimensions from './useWindowDimension'

export default function useTailwindScreenSize() {
  const windowDimension = useWindowDimensions()
  const [screenSize, setScreenSize] = useState<string>('md')

  useEffect(() => {
    const width = parseInt(
      window.getComputedStyle(document.body).getPropertyValue('width'),
    )
    if (width >= 1280) {
      setScreenSize('xl')
    } else if (width >= 768) {
      setScreenSize('lg')
    } else if (width >= 640) {
      setScreenSize('md')
    } else {
      setScreenSize('sm')
    }
  }, [windowDimension])
  return screenSize
}
