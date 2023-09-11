import background from '@assets/background.jpg'
import DotSeparatedTexts from '@components/DotSeparatedTexts'
import CommitmentContainer from '@containers/CommitmentContainer'
import { useEffect, useState } from 'react'

const About = () => {
  const texts: string[] = ['Contact', 'Download Fact Sheet']
  const [isEnlargeImage, setIsEnlargeImage] = useState(false)
  const [containerOpacity, setContainerOpacity] = useState<number>(0)
  useEffect(() => {
    setContainerOpacity(1)
  }, [])
  return (
    <div
      className="w-full h-full bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className="w-full h-full duration-500"
        style={{ opacity: containerOpacity }}
      >
        <CommitmentContainer
          isEnlargeImage={isEnlargeImage}
          setIsEnlargeImage={setIsEnlargeImage}
          setContainerOpacity={setContainerOpacity}
        />
        <div
          className="w-full h-[40px] bg-[rgba(0,0,0,0.5)]"
          onClick={() => setIsEnlargeImage(false)}
        ></div>
        <div
          className="w-full h-[50px] bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-black"
          onClick={() => setIsEnlargeImage(false)}
        ></div>
        <div
          className="w-full flex flex-col justify-between items-center px-[15%] pb-[40px] bg-black"
          onClick={() => setIsEnlargeImage(false)}
        >
          <div className="text-lg text-white h-[100px] mb-12 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
    </div>
  )
}

export default About
