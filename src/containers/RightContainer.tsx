import DotSeparatedTexts from '@components/DotSeparatedTexts'
import { translateLanguages } from '@utils/Constants'
import { onClickLanguage } from '@utils/function'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export type RightContainerProps = {
  setHoverSection: (hoverSection: string) => void
  setContainerOpacity: (opacity: number) => void
}

const RightContainer = (props: RightContainerProps) => {
  const { setHoverSection, setContainerOpacity } = props

  const { t } = useTranslation()
  const [routes, setRoutes] = useState<string[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    setRoutes(['about', 'culture', 'solution', 'technology', 'sustainability'])
  }, [t])
  const onClickRoute = (route: string) => {
    setContainerOpacity(0)
    setTimeout(() => {
      navigate(`/${route.toLowerCase()}`)
    }, 300)
  }
  const bottomTexts: string[] = ['Contact', 'Language']

  return (
    <div className="flex-1 flex-col justify-between items-center hidden lg:flex">
      <div />
      <div className="flex flex-col justify-center items-center flex-1 w-full">
        <div className="flex flex-col justify-center items-center w-1/2">
          {routes.map((route, i) => (
            <div
              key={i}
              className="p-2 w-full text-center hover:cursor-pointer hover:font-bold text-lg capitalize"
              onClick={() => onClickRoute(route)}
              onMouseEnter={() => setHoverSection(route)}
              onMouseLeave={() => setHoverSection('')}
            >
              {t(route)}
            </div>
          ))}
        </div>
        <div className="italic text-md my-10 w-1/2 h-[50px] text-center hover:cursor-pointer hover:font-bold flex justify-center items-center">
          <div>Download Our Fact Sheet</div>
        </div>
      </div>
      <DotSeparatedTexts
        texts={bottomTexts}
        color={'white'}
        hoverCursor="pointer"
        popUpTexts={{
          Language: translateLanguages.map(language => ({
            text: language,
            onClick: () => onClickLanguage(language),
          })),
        }}
        marginX={28}
        fontSize="15px"
      />
    </div>
  )
}

export default RightContainer
