import logo from '@assets/logo.png'
import TopRouteComponent from '@components/TopRouteComponent'
import useLanguage from '@hooks/useLanguage'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const TopRouteContainer = () => {
  const { t } = useTranslation()
  const [routes, setRoutes] = useState<string[]>([])
  const [activeRoute, setActiveRoute] = useState<string>(routes[0])

  useLanguage()
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const commitment = urlParams.get('commitment')
    if (commitment) {
      setActiveRoute(commitment)
    }
  }, [])
  useEffect(() => {
    setRoutes([
      'Home',
      'About',
      'Culture',
      'Solution',
      'Technology',
      'Sustainability',
    ])
  }, [t])

  const onClickRoute = (route: string) => {
    if (route === 'Home') {
      window.location.href = `/`
      return
    }
    window.location.href = `/about?commitment=${route}`
    setActiveRoute(route)
  }

  return (
    <div className="flex flex-row h-1/6 w-full justify-center items-center py-12 px-48">
      {routes.slice(0, 3).map((route, i) => (
        <TopRouteComponent
          route={route}
          onClickRoute={onClickRoute}
          activeRoute={activeRoute}
        />
      ))}
      <div className="flex flex-col justify-center flex-1 h-full">
        <div className="flex flex-row justify-center items-center h-full">
          <img className="text-center text-8xl h-full" src={logo} alt="SO" />
        </div>
      </div>
      {routes.slice(3, 6).map((route, i) => (
        <TopRouteComponent
          route={route}
          onClickRoute={onClickRoute}
          activeRoute={activeRoute}
        />
      ))}
    </div>
  )
}

export default TopRouteContainer
