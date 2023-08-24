import Commitment from '@pages/Commitment'
import Home from '@pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Path from './path'

const routes = [
  {
    path: Path.Home.Root,
    exact: true,
    element: <Home />,
  },
  {
    path: Path.Commitment.Root,
    exact: true,
    element: <Commitment />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]

const Router = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} {...route}></Route>
      ))}
    </Routes>
  )
}
export default Router
