import crossImg from '@assets/cross.png'
import leftArrowImg from '@assets/leftArrow.png'
import rightArrowImg from '@assets/rightArrow.png'
import { ImageInfo } from '@containers/DisplayContainer'
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
      }, 500)
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
      className="w-2/3 flex flex-row justify-center duration-500 items-center absolute top-40"
      style={{
        opacity: isEnlargeImage ? 1 : 0,
        pointerEvents: isEnlargeImage ? 'auto' : 'none',
      }}
    >
      <div className="w-full bg-black p-2 bg-opacity-50 flex flex-col relative justify-center items-center">
        <div
          className="h-5/6 w-full flex justify-center items-center"
          onClick={() => setIsEnlargeImage(false)}
        >
          <img
            src={oldImageInfo?.url}
            alt=""
            className="object-cover duration-500"
            loading="lazy"
            style={{ opacity: isEnlargeImage ? 1 : 0 }}
          />
          <img
            src={newImageInfo?.url}
            alt=""
            className={`object-cover absolute p-2 ${
              isSwitchingToNewInfo ? 'duration-500' : ''
            }`}
            loading="lazy"
            style={{ opacity: isSwitchingToNewInfo ? 1 : 0 }}
          />
        </div>
        <div
          className="text-xs h-[75px] w-full bg-white text-black justify-start items-center flex px-12"
          onClick={() => setIsEnlargeImage(false)}
        >
          <div className="font-bold">{newImageInfo?.title}</div>
          <div className="font-bold mx-1">:</div>
          <div>{newImageInfo?.text}</div>
        </div>
        <div
          className="h-[60px] aspect-square absolute right-4 top-4 hover:cursor-pointer"
          onClick={() => setIsEnlargeImage(false)}
        >
          <img src={crossImg} alt="X" className="w-full h-full"></img>
        </div>
        <div className="h-[60px] w-[95%] absolute flex flex-row justify-between">
          <img
            src={leftArrowImg}
            alt="<"
            className="h-full aspect-square hover:cursor-pointer"
            onClick={() => onClickLeftArrow()}
          ></img>
          <img
            src={rightArrowImg}
            alt=">"
            className="h-full aspect-square hover:cursor-pointer"
            onClick={() => onClickRightArrow()}
          ></img>
        </div>
      </div>
    </div>
  )
}

export default EnlargeDisplayImage
