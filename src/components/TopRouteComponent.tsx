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
      className={`flex flex-col justify-center items-center h-full flex-1  ${
        isEnlargeImage ? '' : 'hover:cursor-pointer hover:font-bold'
      }`}
      onClick={() => onClickRoute(route)}
    >
      <div
        className={`text-center text-xl capitalize flex flex-col items-center justify-center ${
          activeRoute === route ? 'font-bold' : ''
        }`}
      >
        {t(route)}
        <div
          className="translate-y-1 duration-300"
          style={{ opacity: activeRoute === route ? 1 : 0 }}
        >
          <Dot size={6} />
        </div>
      </div>
    </div>
  )
}

export default TopRouteComponent
