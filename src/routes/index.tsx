import About from '@pages/Commitment'
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
    path: Path.About.Root,
    exact: true,
    element: <About />,
  },
  {
    path: Path.Culture.Root,
    exact: true,
    element: <About />,
  },
  {
    path: Path.Solution.Root,
    exact: true,
    element: <About />,
  },
  {
    path: Path.Technology.Root,
    exact: true,
    element: <About />,
  },
  {
    path: Path.Sustainability.Root,
    exact: true,
    element: <About />,
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
