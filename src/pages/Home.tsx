import HomeContainer from '@containers/HomeContainer'
import useWindowDimensions from '@hooks/useWindowDimension'
import { useEffect } from 'react'

const Home = () => {
  const body = document.querySelector('body')
  useEffect(() => {
    body?.classList.add('duration-300')
  }, [body])
  const window = useWindowDimensions()
  return (
    <div
      className="w-full bg-white duration-300"
      style={{ height: `${window.height}px` }}
    >
      <HomeContainer />
    </div>
  )
}

export default Home
