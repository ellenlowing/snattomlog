import DisplayImage from '@components/DisplayImage'
import EnlargeDisplayImage from '@components/EnlargeDisplayImage'
import { useEffect, useState } from 'react'

export type DisplayContainerProps = {}
const DisplayContainer = (props: DisplayContainerProps) => {
  const imageUrls: string[] = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
  ]
  const [isEnlargeImage, setIsEnlargeImage] = useState(false)
  const [enlargeImageUrl, setEnlargeImageUrl] = useState('')
  const [isTop, setIsTop] = useState(true)

  const onClickImage = (url: string) => {
    setIsEnlargeImage(true)
    setEnlargeImageUrl(url)
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTop(true)
      else setIsTop(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const onClickDiminish = () => {
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
  return (
    <div className="flex flex-col w-full h-5/6 justify-between items-center">
      {isEnlargeImage ? (
        <EnlargeDisplayImage
          url={enlargeImageUrl}
          text={'test'}
          onClick={onClickDiminish}
        />
      ) : (
        <div className="flex flex-col w-full h-[90%] justify-start items-center">
          <div className="text-center flex tracking-[25px] text-2xl bg-opacity-50 h-[20%] justify-center items-center">
            <div> COMMITMENT</div>
          </div>
          <div className="w-4/6 flex-col bg-black p-[5px] bg-opacity-50 flex h-[60%]">
            {[...new Array(2)].map((_, i) => (
              <div
                className="flex flex-row justify-center items-center w-full h-1/2"
                key={i}
              >
                {[...new Array(8)].map((_, j) => (
                  <DisplayImage
                    key={j}
                    url={imageUrls[i * 8 + j]}
                    onClick={onClickImage}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
      <div
        className={`text-xs text-center tracking-[10px] h-[10%] w-full flex justify-center items-center hover:cursor-pointer bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.5)] ${
          isTop ? 'hover:to-black' : '' //only work if this class is load on initial
        }`}
        onClick={onClickDiminish}
      >
        <div>THE SNATT OMLOG GROUP</div>
      </div>
    </div>
  )
}

export default DisplayContainer
