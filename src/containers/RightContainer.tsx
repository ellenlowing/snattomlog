import DotSeparatedTexts from '@components/DotSeparatedTexts'
import i18n from 'i18next'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export type RightContainerProps = {
  setHoverSection: (hoverSection: string) => void
}

const RightContainer = (props: RightContainerProps) => {
  const { setHoverSection } = props
  const { t } = useTranslation()
  const [routes, setRoutes] = useState<string[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    setRoutes(['about', 'culture', 'solution', 'technology', 'sustainability'])
  }, [t])
  const onClickRoute = (route: string) => {
    navigate(`/${route.toLowerCase()}`)
  }
  const bottomTexts: string[] = ['Contact', 'Language']

  const onClickLanguage = (language: string) => {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
  }
  return (
    <div className="flex flex-1 flex-col justify-between items-center">
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
        popUpTexts={{
          Language: [
            {
              text: 'English',
              onClick: () => onClickLanguage('en'),
            },
            {
              text: 'French',
              onClick: () => onClickLanguage('fr'),
            },
            {
              text: 'Italian',
              onClick: () => onClickLanguage('it'),
            },
          ],
        }}
        marginX={28}
      />
    </div>
  )
}

export default RightContainer
