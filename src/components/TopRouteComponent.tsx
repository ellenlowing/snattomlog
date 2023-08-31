import { useTranslation } from 'react-i18next'
import Dot from './Dot'

export type TopRouteComponentProps = {
  route: string
  activeRoute: string
  onClickRoute: (route: string) => void
}

const TopRouteComponent = (props: TopRouteComponentProps) => {
  const { route, activeRoute, onClickRoute } = props
  const { t } = useTranslation()
  return (
    <div
      className="flex flex-col justify-center items-center h-[50px] hover:bg-slate-500 hover:cursor-pointer flex-1"
      onClick={() => onClickRoute(route)}
    >
      <div className="text-center text-lg capitalize">{t(route)}</div>
      {activeRoute === route && <Dot size={5} />}
    </div>
  )
}

export default TopRouteComponent
