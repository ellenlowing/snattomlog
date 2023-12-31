import cultureImg from '@assets/DisplayImages/Culture.png'
import establishedImg from '@assets/DisplayImages/Established.png'
import goldenGooseImg from '@assets/DisplayImages/GoldenGoose.png'
import gravityImg from '@assets/DisplayImages/Gravity.png'
import installationImg from '@assets/DisplayImages/Installation.png'
import lVWindowImg from '@assets/DisplayImages/LVWindow.png'
import leadershipImg from '@assets/DisplayImages/Leadership.png'
import loroPianaImg from '@assets/DisplayImages/LoroPiana.png'
import madeInItalyImg from '@assets/DisplayImages/MadeInItaly.png'
import rFFebImg from '@assets/DisplayImages/RFFeb.png'
import rLWindowImg from '@assets/DisplayImages/RLWindow.png'
import ralphLaurenRunwayImg from '@assets/DisplayImages/RalphLaurenRunway.png'
import realEstateImg from '@assets/DisplayImages/RealEstate.png'
import studioImg from '@assets/DisplayImages/Studio.png'
import supremeDropImg from '@assets/DisplayImages/SupremeDrop.png'
import technologyImg from '@assets/DisplayImages/Technology.png'
import downArrow from '@assets/downArrow.png'
import DisplayImage from '@components/DisplayImage'
import EnlargeDisplayImage from '@components/EnlargeDisplayImage'
import useIsMobile from '@hooks/useIsMobile'
import useIsTop from '@hooks/useIsTop'
import { useEffect, useState } from 'react'

export type DisplayContainerProps = {
  isEnlargeImage: boolean
  setIsEnlargeImage: (isEnlargeImage: boolean) => void
  activeRoute: string
}
export type ImageInfo = {
  url: string
  title: string
  text: string
}
const imageInfos: ImageInfo[] = [
  {
    url: madeInItalyImg,
    title: 'Made In Italy',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    url: establishedImg,
    title: 'Established',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    url: ralphLaurenRunwayImg,
    title: 'Ralph Lauren Runway',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    url: lVWindowImg,
    title: 'LV Window',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    url: supremeDropImg,
    title: 'Supreme Drop',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    url: goldenGooseImg,
    title: 'Golden Goose',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    url: loroPianaImg,
    title: 'Loro Piana',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    url: rFFebImg,
    title: 'RF Feb',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    url: rLWindowImg,
    title: 'RL Window',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    url: installationImg,
    title: 'Installation',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    url: realEstateImg,
    title: 'Real Estate',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    url: studioImg,
    title: 'Studio',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    url: technologyImg,
    title: 'Technology',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    url: leadershipImg,
    title: 'Leadership',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    url: cultureImg,
    title: 'Culture',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    url: gravityImg,
    title: 'Gravity',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]
const DisplayContainer = (props: DisplayContainerProps) => {
  const { isEnlargeImage, setIsEnlargeImage, activeRoute } = props
  const [enlargeImageInfo, setEnlargeImageInfo] = useState(imageInfos[0])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSwitchingToNewInfo, setIsSwitchingToNewInfo] =
    useState<boolean>(false)
  const isTop = useIsTop()
  const [oldActiveRoute, setOldActiveRoute] = useState<string>('')
  const [displayImagesOpacity, setDisplayImagesOpacity] = useState<number>(0)
  const [galleryRowCount, setGalleryRowCount] = useState<number>(2)
  const [galleryColumnCount, setGalleryColumnCount] = useState<number>(8)
  const isMobile = useIsMobile()
  useEffect(() => {
    if (isMobile) {
      setGalleryColumnCount(2)
      setGalleryRowCount(8)
    } else {
      setGalleryColumnCount(8)
      setGalleryRowCount(2)
    }
  }, [isMobile])

  const onClickImage = (url: string) => {
    const indexOfImage = imageInfos.findIndex(imageInfo => {
      return imageInfo.url === url
    })
    setEnlargeImageInfo(imageInfos[indexOfImage])
    setCurrentIndex(indexOfImage)
    setIsEnlargeImage(true)
  }
  useEffect(() => {
    if (oldActiveRoute !== activeRoute) {
      setOldActiveRoute(activeRoute)
      setDisplayImagesOpacity(0)
      //change content
      setTimeout(() => {
        setDisplayImagesOpacity(1)
      }, 300)
    }
  }, [activeRoute])

  const onClickScrollDown = () => {
    if (isEnlargeImage) {
      setIsEnlargeImage(false)
      return
    }
    //scroll to bottom in 1s
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }

  const onClickRightArrow = () => {
    if (isSwitchingToNewInfo) return
    const index = (currentIndex + 1) % imageInfos.length
    setCurrentIndex(index)
    setEnlargeImageInfo(imageInfos[index])
  }
  const onClickLeftArrow = () => {
    if (isSwitchingToNewInfo) return
    const index = (currentIndex - 1 + imageInfos.length) % imageInfos.length
    setCurrentIndex(index)
    setEnlargeImageInfo(imageInfos[index])
  }
  return (
    <div className="flex flex-col w-full lg:h-5/6 justify-between items-center">
      <EnlargeDisplayImage
        enlargeImageInfo={enlargeImageInfo}
        isEnlargeImage={isEnlargeImage}
        setIsEnlargeImage={setIsEnlargeImage}
        onClickLeftArrow={onClickLeftArrow}
        onClickRightArrow={onClickRightArrow}
        isSwitchingToNewInfo={isSwitchingToNewInfo}
        setIsSwitchingToNewInfo={setIsSwitchingToNewInfo}
      />
      <div
        className="flex flex-col w-full h-[90%] justify-start items-center"
        onClick={() => {
          if (isEnlargeImage) setIsEnlargeImage(false)
        }}
      >
        {!isMobile && (
          <div className="font-medium text-center flex tracking-[25px] text-2xl bg-opacity-50 h-[20%] justify-center items-center">
            <div>COMMITMENT</div>
          </div>
        )}
        <div
          className={`w-5/6 lg:w-4/6 flex-col bg-black p-[5px] mt-2 flex lg:h-[60%] duration-300 ${
            isEnlargeImage ? 'bg-opacity-0' : 'bg-opacity-50'
          }`}
          style={{ opacity: displayImagesOpacity }}
        >
          {[...new Array(galleryRowCount)].map((_, i) => (
            <div
              className="flex flex-row justify-center items-center w-full h-[300px] lg:h-1/2"
              key={i}
            >
              {[...new Array(galleryColumnCount)].map((_, j) => (
                <DisplayImage
                  key={j}
                  isEnlargeImage={isEnlargeImage}
                  url={imageInfos[i * galleryColumnCount + j].url}
                  onClick={onClickImage}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`text-xs text-center tracking-[10px] h-[10%] w-full flex justify-center items-center bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.5)] group 
        ${
          isTop ? 'hover:to-black' : '' //only work if this class is load on initial
        } ${isEnlargeImage ? '' : 'hover:cursor-s-resize'}`}
        onClick={onClickScrollDown}
        style={{
          cursor:
            isEnlargeImage || !isTop ? 'default' : `url(${downArrow}), auto`,
        }}
      >
        {!isMobile && (
          <div
            className={`semplicita mt-10 lg:mt-0 text-xs -text-center tracking-[7px]
          ${isTop ? 'group-hover:-translate-y-1' : ''}
         duration-200`}
          >
            THE SNATT OMLOG GROUP
          </div>
        )}
      </div>
    </div>
  )
}

export default DisplayContainer
