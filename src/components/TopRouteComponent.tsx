import { useTranslation } from 'react-i18next'
import Dot from './Dot'

export type TopRouteComponentProps = {
  route: string
  activeRoute: string
  onClickRoute: (route: string) => void
  isEnlargeImage: boolean
}

const TopRouteComponent = (props: TopRouteComponentProps) => {
  const { route, activeRoute, onClickRoute, isEnlargeImage } = props
  const { t } = useTranslation()
  return (
    <div
      className={`flex flex-col justify-start items-center h-[50px] flex-1 ${
        isEnlargeImage ? '' : 'hover:cursor-pointer hover:font-bold'
      }`}
      onClick={() => onClickRoute(route)}
    >
      <div
        className={`text-center text-lg capitalize  ${
          activeRoute === route ? 'font-bold' : ''
        }`}
      >
        {t(route)}
      </div>
      {activeRoute === route && <Dot size={5} />}
    </div>
  )
}

export default TopRouteComponent
