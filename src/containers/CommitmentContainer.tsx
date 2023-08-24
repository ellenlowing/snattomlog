import DisplayContainer from './DisplayContainer'
import TopRouteContainer from './TopRouteContainer'

const CommitmentContainer = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center text-white justify-start">
      <TopRouteContainer />
      <DisplayContainer />
    </div>
  )
}

export default CommitmentContainer
