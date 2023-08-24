import useLanguage from '@hooks/useLanguage'
import { useEffect, useRef, useState } from 'react'
import Dot from './Dot'

export type DotSeparatedTextProps = {
  color: string
  marginX: number
  texts: string[]
  popUpTexts: {
    [key: string]: {
      text: string
      onClick?: () => void
    }[]
  }
}

const DotSeparatedTexts = (props: DotSeparatedTextProps) => {
  const { texts, popUpTexts, marginX, color } = props

  const [isShowPopUp, setIsShowPopUp] = useState<boolean>(false)
  const [popUpWidth, setPopUpWidth] = useState<string>('')
  const language = useLanguage()

  const popUpRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log(popUpRef.current)
    if (popUpRef.current) {
      setPopUpWidth(`${popUpRef.current.offsetWidth * 1.1}px`)
      console.log(popUpRef.current.offsetWidth)
    }
  }, [])
  return (
    <div className="flex flex-row w-5/6 justify-center items-center">
      {texts.map((text, i) => (
        <div className="flex flex-row justify-center">
          {isShowPopUp && (
            <div
              className="absolute bg-slate-500 flex flex-col items-start justify-center"
              style={{
                transform: `translateY(-${
                  Object.keys(popUpTexts).length * 20 + 40
                }px)`,
                width: popUpWidth,
              }}
              onMouseLeave={() => {
                if (popUpTexts[text]) setIsShowPopUp(false)
              }}
            >
              {popUpTexts[text] &&
                popUpTexts[text].map(popUpText => (
                  <div
                    className="text-sm h-[20px] px-1 w-full hover:bg-slate-400"
                    onClick={() => {
                      popUpText.onClick()
                      setIsShowPopUp(false)
                    }}
                    style={{
                      color: language === popUpText.text ? 'gray' : 'white',
                    }}
                  >
                    {popUpText.text}
                  </div>
                ))}
            </div>
          )}
          <div
            className="text-sm hover:font-bold"
            ref={popUpRef}
            style={{ color: color }}
            onMouseEnter={() => {
              if (popUpTexts[text]) setIsShowPopUp(true)
            }}
          >
            {text}
          </div>
          {i !== texts.length - 1 && (
            <div
              className="text-center h-[20px] aspect-square flex justify-center items-center"
              style={{ marginLeft: marginX, marginRight: marginX }}
            >
              <Dot size={2} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default DotSeparatedTexts
