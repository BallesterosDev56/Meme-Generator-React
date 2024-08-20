import './App.css'
import { Header } from './components/header/header'
import { Content } from './components/content/Content'

export const App = () => {
  return (
    <>
      <Header></Header>
      <div className="content-container">
      <Content></Content>
      </div>
    </>
  )
}
