import { useEffect, useState } from 'react'
import useWindowDimensions from './useWindowDimension'

export default function useTailwindScreenSize() {
  const windowDimension = useWindowDimensions()
  const [screenSize, setScreenSize] = useState<string>('md')

  useEffect(() => {
    if (windowDimension.width >= 1280) {
      setScreenSize('xl')
    } else if (windowDimension.width >= 1024) {
      setScreenSize('lg')
    } else if (windowDimension.width >= 768) {
      setScreenSize('md')
    } else if (windowDimension.width >= 450) {
      setScreenSize('sm')
    } else {
      setScreenSize('xs')
    }
  }, [windowDimension])
  return screenSize
}
