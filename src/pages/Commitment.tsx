import background from '@assets/background.png'
import DotSeparatedTexts from '@components/DotSeparatedTexts'
import CommitmentContainer from '@containers/CommitmentContainer'

const About = () => {
  const texts: string[] = ['Contact', 'Download Fact Sheet']
  return (
    <div
      className="w-full bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <CommitmentContainer />
      <div className="w-full h-[100px] bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-black"></div>
      <div className="w-full flex flex-col justify-between items-center px-[15%] pb-[40px] bg-black">
        <div className="text-lg text-white h-[100px] mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </div>
        <DotSeparatedTexts
          marginX={24}
          color={'white'}
          popUpTexts={{}}
          texts={texts}
        />
      </div>
    </div>
  )
}

export default About
