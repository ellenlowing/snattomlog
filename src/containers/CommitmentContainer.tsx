import DisplayContainer from './DisplayContainer'
import TopRouteContainer from './TopRouteContainer'

export type CommitmentContainerProps = {}

const CommitmentContainer = (props: CommitmentContainerProps) => {
  return (
    <div className="flex flex-col w-full h-screen items-center text-white justify-start">
      <TopRouteContainer />
      <DisplayContainer />
    </div>
  )
}

export default CommitmentContainer
