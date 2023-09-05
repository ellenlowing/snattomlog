import DotSeparatedTexts from '@components/DotSeparatedTexts'
import LogoComponent from '@components/LogoComponent'

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
  return (
    <div className="flex-1 flex-col justify-between items-center flex">
      <LogoComponent></LogoComponent>
      {hoverSection === '' ? (
        <div className="w-1/3 text-2xl text-center flex-1">
          <div>Global Solutions</div>
          <div>In Creative Worlds</div>
        </div>
      ) : null}
      {hoverSection === '' ? (
        <DotSeparatedTexts
          texts={locations}
          popUpTexts={{}}
          marginX={4}
          color={'white'}
        />
      ) : null}
    </div>
  )
}

export default LeftContainer
