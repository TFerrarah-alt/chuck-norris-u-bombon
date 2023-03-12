import './App.css'
import Title from './components/Title/Title'
import Subtitle from './components/Subtitle/Subtitle'

function App() {

  return (
    <div className="App">
      <div className="titles">
        <Title title="Joke Norris" />
        <Subtitle subtitle = "Chuck Norris Joke Generator" />
      </div>
    </div>
  )
}

export default App
