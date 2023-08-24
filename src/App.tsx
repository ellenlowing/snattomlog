import { store } from '@stores/index'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
