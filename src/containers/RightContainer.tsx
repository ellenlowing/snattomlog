import DotSeparatedTexts from '@components/DotSeparatedTexts'
import i18n from 'i18next'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const RightContainer = () => {
  const { t } = useTranslation()
  const [routes, setRoutes] = useState<string[]>([])
  useEffect(() => {
    setRoutes(['About', 'Culture', 'Solution', 'Technology', 'Sustainability'])
  }, [t])
  const onClickRoute = (route: string) => {
    window.location.href = `/about?commitment=${route}`
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
              className="p-2 w-full text-center hover:cursor-pointer hover:bg-slate-500 text-lg"
              onClick={() => onClickRoute(route)}
            >
              {t(route)}
            </div>
          ))}
        </div>
        <div className="italic text-md my-10 w-1/2 h-[50px] text-center hover:cursor-pointer hover:bg-slate-500 flex justify-center items-center">
          <div>Download Our Fact Sheet</div>
        </div>
      </div>
      <DotSeparatedTexts
        texts={bottomTexts}
        color={'white'}
        popUpTexts={{
          Language: [
            {
              text: 'en',
              onClick: () => onClickLanguage('en'),
            },
            {
              text: 'fr',
              onClick: () => onClickLanguage('fr'),
            },
            {
              text: 'it',
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
