import HomeContainer from '@containers/HomeContainer'
import { useEffect } from 'react'

const Home = () => {
  const body = document.querySelector('body')
  useEffect(() => {
    body?.classList.add('duration-300')
  }, [body])
  return (
    <div className="w-full h-screen bg-white duration-300">
      <HomeContainer />
    </div>
  )
}

export default Home
