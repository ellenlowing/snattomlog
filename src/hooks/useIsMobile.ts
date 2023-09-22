import useTailwindScreenSize from './useTailwindScreenSize'

export default function useIsMobile() {
  const tailWindScreenSize = useTailwindScreenSize()

  return (
    tailWindScreenSize === 'sm' ||
    tailWindScreenSize === 'md' ||
    tailWindScreenSize === 'xs'
  )
}
