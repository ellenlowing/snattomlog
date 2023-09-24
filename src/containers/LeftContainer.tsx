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
  const [marginX, setMarginX] = useState<number>(0)
  const [fontSize, setFontSize] = useState<string>('15px')
  const twScreenSize = useTailwindScreenSize()

  useEffect(() => {
    if (twScreenSize === 'xl') {
      setMarginX(4)
      setFontSize('15px')
    } else if (twScreenSize === 'lg') {
      setMarginX(4)
      setFontSize('15px')
    } else if (twScreenSize === 'md') {
      setMarginX(2)
      setFontSize('10px')
    } else if (twScreenSize === 'sm') {
      setMarginX(0)
      setFontSize('10px')
    }
  }, [twScreenSize])
  return (
    <div className="flex-1 flex-col justify-between items-center flex">
      <LogoComponent></LogoComponent>
      {hoverSection === '' ? (
        <div className="w-full text-2xl text-center flex-1">
          <div>Global Solutions</div>
          <div>In Creative Worlds</div>
        </div>
      ) : null}
      {hoverSection === '' ? (
        <DotSeparatedTexts
          texts={locations}
          popUpTexts={{}}
          fontSize={fontSize}
          hoverCursor="default"
          marginX={marginX}
          color={'white'}
        />
      ) : null}
    </div>
  )
}

export default LeftContainer
