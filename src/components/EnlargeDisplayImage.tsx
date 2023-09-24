import crossImg from '@assets/cross.png'
import leftArrowImg from '@assets/leftArrow.png'
import rightArrowImg from '@assets/rightArrow.png'
import { ImageInfo } from '@containers/DisplayContainer'
import useIsMobile from '@hooks/useIsMobile'
import useWindowDimensions from '@hooks/useWindowDimension'
import { useEffect, useState } from 'react'

export type EnlargeDisplayImageProps = {
  enlargeImageInfo: ImageInfo
  onClickLeftArrow: () => void
  onClickRightArrow: () => void

  isEnlargeImage: boolean
  setIsEnlargeImage: (isEnlargeImage: boolean) => void
  isSwitchingToNewInfo: boolean
  setIsSwitchingToNewInfo: (isSwitchingToNewInfo: boolean) => void
}

const EnlargeDisplayImage = (props: EnlargeDisplayImageProps) => {
  const {
    enlargeImageInfo,
    onClickLeftArrow,
    onClickRightArrow,
    isEnlargeImage,
    setIsEnlargeImage,
    isSwitchingToNewInfo,
    setIsSwitchingToNewInfo,
  } = props

  const [oldImageInfo, setOldImageInfo] = useState<ImageInfo>(null)
  const [newImageInfo, setNewImageInfo] = useState<ImageInfo>(null)
  const [isHoverImage, setIsHoverImage] = useState<boolean>(false)
  const isMobile = useIsMobile()
  const window = useWindowDimensions()

  useEffect(() => {
    if (oldImageInfo === null) {
      setOldImageInfo(enlargeImageInfo)
      setNewImageInfo(enlargeImageInfo)
      return
    }
    if (oldImageInfo.url !== enlargeImageInfo.url) {
      setIsSwitchingToNewInfo(true)
      setNewImageInfo(enlargeImageInfo)
      setTimeout(() => {
        setOldImageInfo(enlargeImageInfo)
        setIsSwitchingToNewInfo(false)
      }, 300)
    }
  }, [enlargeImageInfo, oldImageInfo, setIsSwitchingToNewInfo])

  useEffect(() => {
    if (!isEnlargeImage) {
      setOldImageInfo(null)
      setNewImageInfo(null)
    }
  }, [isEnlargeImage])

  return (
    <div
      className="w-4/5 lg:w-4/5 xl:w-3/5 flex flex-col justify-center duration-300 items-center fixed z-20 h-[65%] -translate-y-6"
      style={{
        opacity: isEnlargeImage ? 1 : 0,
        pointerEvents: isEnlargeImage ? 'auto' : 'none',
      }}
    >
      <div
        className="w-full bg-black p-3 bg-opacity-50 flex flex-col relative justify-center items-center h-full"
        onMouseEnter={() => setIsHoverImage(true)}
        onMouseLeave={() => setIsHoverImage(false)}
      >
        <div
          className="h-full flex justify-center items-center relative"
          onClick={() => setIsEnlargeImage(false)}
        >
          <img
            src={oldImageInfo?.url}
            alt=""
            className="object-cover h-full duration-300"
            loading="lazy"
            style={{ opacity: isEnlargeImage ? 1 : 0 }}
          />
          <img
            src={newImageInfo?.url}
            alt=""
            className={`object-cover h-full absolute ${
              isSwitchingToNewInfo ? 'duration-300' : ''
            }`}
            loading="lazy"
            style={{ opacity: isSwitchingToNewInfo ? 1 : 0 }}
          />
        </div>
        {!isMobile && (
          <div
            className="text-xs h-[100px] lg:h-[75px] w-full bg-white text-black justify-start items-center flex px-4 lg:px-12"
            onClick={() => setIsEnlargeImage(false)}
          >
            <p>
              <span className="font-bold mr-1">{newImageInfo?.title}</span>
              <span className="font-bold mr-1">:</span>
              {newImageInfo?.text}
            </p>
          </div>
        )}

        <img
          src={crossImg}
          alt="X"
          className="h-[20px] lg:h-[40px] aspect-square absolute right-4 top-4 lg:right-6 lg:top-6 hover:cursor-pointer duration-300"
          onClick={() => setIsEnlargeImage(false)}
          style={{ opacity: isHoverImage || isMobile ? 1 : 0 }}
        ></img>
        <img
          src={leftArrowImg}
          alt="<"
          className="absolute h-[30px] lg:h-[40px] aspect-square hover:cursor-pointer left-4 duration-300 -translate-x-14 lg:-translate-x-0"
          onClick={() => onClickLeftArrow()}
          style={{ opacity: isHoverImage || isMobile ? 1 : 0 }}
        ></img>
        <img
          src={rightArrowImg}
          alt=">"
          className="absolute h-[30px] lg:h-[40px] aspect-square hover:cursor-pointer right-4 duration-300 translate-x-14 lg:translate-x-0"
          onClick={() => onClickRightArrow()}
          style={{ opacity: isHoverImage || isMobile ? 1 : 0 }}
        ></img>
      </div>
      {isMobile && (
        <div
          className="text-xs h-[100px] lg:h-[75px] w-full bg-white text-black justify-start items-center flex px-4 lg:px-12"
          onClick={() => setIsEnlargeImage(false)}
        >
          <p>
            <span className="font-bold mr-1">{newImageInfo?.title}</span>
            <span className="font-bold mr-1">:</span>
            {newImageInfo?.text}
          </p>
        </div>
      )}
    </div>
  )
}

export default EnlargeDisplayImage
