import useLanguage from '@hooks/useLanguage'
import { useEffect, useRef, useState } from 'react'
import Dot from './Dot'

export type DotSeparatedTextProps = {
  color: string
  fontSize: number
  texts: string[]
  hoverCursor: string
  popUpTexts: {
    [key: string]: {
      text: string
      onClick?: () => void
    }[]
  }
}

const DotSeparatedTexts = (props: DotSeparatedTextProps) => {
  const { texts, popUpTexts, fontSize, color, hoverCursor } = props

  const [isShowPopUp, setIsShowPopUp] = useState<boolean>(false)
  const [popUpWidth, setPopUpWidth] = useState<string>('')
  const language = useLanguage()

  const popUpRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (popUpRef.current) {
      setPopUpWidth(`${popUpRef.current.offsetWidth * 1.1}px`)
    }
  }, [])
  return (
    <div className="flex flex-row w-full justify-between items-center">
      {/* {texts.map((text, i) => (
        <div
          className={`flex flex-row justify-center`}
          key={i}
          style={{ cursor: hoverCursor }}
        >
          {isShowPopUp && (
            <div
              className="absolute flex flex-col items-end justify-start"
              style={{
                transform: `translateY(-${
                  Object.keys(popUpTexts).length * 30 + 80
                }px)`,
                width: popUpWidth,
                height: `${Object.keys(popUpTexts).length * 30 + 80}px`,
              }}
              onMouseEnter={() => {
                if (popUpTexts[text]) setIsShowPopUp(true)
              }}
              onMouseLeave={() => {
                if (popUpTexts[text]) setIsShowPopUp(false)
              }}
            >
              {popUpTexts[text] &&
                popUpTexts[text].map((popUpText, i) => (
                  <div
                    key={i}
                    className="text-sm h-[30px] px-1 hover:font-bold hover:cursor-pointer capitalize"
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
            className="hover:font-bold bg-red-500"
            ref={popUpRef}
            style={{ color: color, fontSize: `${fontSize}px` }}
            onMouseEnter={() => {
              if (popUpTexts[text]) setIsShowPopUp(true)
            }}
            onMouseLeave={() => {
              if (popUpTexts[text]) setIsShowPopUp(false)
            }}
          >
            {text}
          </div>
          {i !== texts.length - 1 && (
            <div className="text-center h-[20px] aspect-square flex justify-center items-center ">
              <Dot size={3} />
            </div>
          )}
        </div>
      ))} */}
      {texts.map((text, i) =>
        new Array(2).fill(0).map((_, j) =>
          j === 0 ? (
            <div key={`${i}-${j}`}>
              {isShowPopUp && (
                <div
                  className="absolute flex flex-col items-end justify-start"
                  style={{
                    transform: `translateY(-${
                      Object.keys(popUpTexts).length * 30 + 80
                    }px)`,
                    width: popUpWidth,
                    height: `${Object.keys(popUpTexts).length * 30 + 80}px`,
                  }}
                  onMouseEnter={() => {
                    if (popUpTexts[text]) setIsShowPopUp(true)
                  }}
                  onMouseLeave={() => {
                    if (popUpTexts[text]) setIsShowPopUp(false)
                  }}
                >
                  {popUpTexts[text] &&
                    popUpTexts[text].map((popUpText, i) => (
                      <div
                        key={i}
                        className="text-sm h-[30px] px-1 hover:font-bold hover:cursor-pointer capitalize"
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
                className="hover:font-bold"
                ref={popUpRef}
                style={{ color: color, fontSize: `${fontSize}px` }}
                onMouseEnter={() => {
                  if (popUpTexts[text]) setIsShowPopUp(true)
                }}
                onMouseLeave={() => {
                  if (popUpTexts[text]) setIsShowPopUp(false)
                }}
              >
                {text}
              </div>
            </div>
          ) : (
            i !== texts.length - 1 && (
              <div
                className="text-center h-[20px] aspect-square flex justify-center items-center "
                key={i}
              >
                <Dot size={3} />
              </div>
            )
          ),
        ),
      )}
    </div>
  )
}

export default DotSeparatedTexts
