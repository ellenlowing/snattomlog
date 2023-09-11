import HomeContainer from '@containers/HomeContainer'
import { useEffect } from 'react'

const Home = () => {
  const body = document.querySelector('body')
  useEffect(() => {
    body?.classList.add('duration-500')
  }, [body])
  return (
    <div className="w-full h-screen bg-white duration-500">
      <HomeContainer />
    </div>
  )
}

export default Home
