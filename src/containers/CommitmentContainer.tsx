import DisplayContainer from './DisplayContainer'
import TopRouteContainer from './TopRouteContainer'

export type CommitmentContainerProps = {
  isEnlargeImage: boolean
  setIsEnlargeImage: (isEnlargeImage: boolean) => void
  activeRoute: string
  setActiveRoute: (activeRoute: string) => void
  onClickRoute: (route: string) => void
}

const CommitmentContainer = (props: CommitmentContainerProps) => {
  const {
    isEnlargeImage,
    setIsEnlargeImage,
    activeRoute,
    setActiveRoute,
    onClickRoute,
  } = props
  return (
    <div className="flex flex-col w-full lg:h-screen items-center text-white justify-start">
      <TopRouteContainer
        isEnlargeImage={isEnlargeImage}
        setIsEnlargeImage={setIsEnlargeImage}
        activeRoute={activeRoute}
        setActiveRoute={setActiveRoute}
        onClickRoute={onClickRoute}
      />
      <DisplayContainer
        isEnlargeImage={isEnlargeImage}
        setIsEnlargeImage={setIsEnlargeImage}
        activeRoute={activeRoute}
      />
    </div>
  )
}

export default CommitmentContainer
