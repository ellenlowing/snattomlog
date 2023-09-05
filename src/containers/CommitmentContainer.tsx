import DisplayContainer from './DisplayContainer'
import TopRouteContainer from './TopRouteContainer'

export type CommitmentContainerProps = {
  isEnlargeImage: boolean
  setIsEnlargeImage: (isEnlargeImage: boolean) => void
}

const CommitmentContainer = (props: CommitmentContainerProps) => {
  const { isEnlargeImage, setIsEnlargeImage } = props
  return (
    <div className="flex flex-col w-full h-screen items-center text-white justify-start">
      <TopRouteContainer
        isEnlargeImage={isEnlargeImage}
        setIsEnlargeImage={setIsEnlargeImage}
      />
      <DisplayContainer
        isEnlargeImage={isEnlargeImage}
        setIsEnlargeImage={setIsEnlargeImage}
      />
    </div>
  )
}

export default CommitmentContainer
