import DotSeparatedTexts from '@components/DotSeparatedTexts'
import LogoComponent from '@components/LogoComponent'
import useTailwindScreenSize from '@hooks/useTailwindScreenSize'
import { useEffect, useState } from 'react'

export type LeftContainerProps = {
  hoverSection: string
}

const locations: string[] = [
  'Milan',
  'New York',
  'London',
  'Los Angeles',
  'Hong Kong',
  'Shanghai',
]

const LeftContainer = (props: LeftContainerProps) => {
  const { hoverSection } = props
  const [fontSize, setFontSize] = useState<number>(0)
  const windowSize = useTailwindScreenSize()

  useEffect(() => {
    if (windowSize === 'lg') {
      setFontSize(14)
    } else if (windowSize === 'md') {
      setFontSize(15)
    } else if (windowSize === 'sm') {
      setFontSize(11)
    } else if (windowSize === 'xs') {
      setFontSize(8)
    }
    console.log(windowSize)
  }, [windowSize])
  return (
    <div className="flex-1 flex-col justify-between items-center flex">
      <LogoComponent></LogoComponent>
      {hoverSection === '' ? (
        <div className="w-full text-2xl text-center flex-1">
          <div>Global Solutions</div>
          <div>In Creative Worlds</div>
        </div>
      ) : null}
      {!hoverSection && (
        <div className="w-full px-4 sm:px-8 lg:px-4 xl:px-8 h-4">
          <DotSeparatedTexts
            texts={locations}
            popUpTexts={{}}
            fontSize={fontSize}
            hoverCursor="default"
            color={'white'}
          />
        </div>
      )}
    </div>
  )
}

export default LeftContainer
