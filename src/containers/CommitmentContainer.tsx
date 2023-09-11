import { useState } from 'react'
import DisplayContainer from './DisplayContainer'
import TopRouteContainer from './TopRouteContainer'

export type CommitmentContainerProps = {
  isEnlargeImage: boolean
  setIsEnlargeImage: (isEnlargeImage: boolean) => void
  setContainerOpacity: (opacity: number) => void
}

const CommitmentContainer = (props: CommitmentContainerProps) => {
  const { isEnlargeImage, setIsEnlargeImage, setContainerOpacity } = props
  const [activeRoute, setActiveRoute] = useState<string>('')
  return (
    <div className="flex flex-col w-full h-screen items-center text-white justify-start">
      <TopRouteContainer
        isEnlargeImage={isEnlargeImage}
        setIsEnlargeImage={setIsEnlargeImage}
        setContainerOpacity={setContainerOpacity}
        activeRoute={activeRoute}
        setActiveRoute={setActiveRoute}
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
