import DotSeparatedTexts from '@components/DotSeparatedTexts'
import LogoComponent from '@components/LogoComponent'

const LeftContainer = () => {
  const locations: string[] = [
    'Milan',
    'New York',
    'London',
    'Los Angeles',
    'Hong Kong',
    'Shanghai',
  ]
  return (
    <div className="flex-1 flex-col justify-between items-center flex ">
      <LogoComponent></LogoComponent>
      <div className="w-1/3 text-2xl text-center flex-1 ">
        <div>Global Solutions</div>
        <div>In Creative Worlds</div>
      </div>
      <DotSeparatedTexts
        texts={locations}
        popUpTexts={{}}
        marginX={4}
        color={'white'}
      />
    </div>
  )
}

export default LeftContainer
