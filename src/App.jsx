import './App.css'
import Title from './components/Title/Title'
import Subtitle from './components/Subtitle/Subtitle'
import Paragraph from './components/Paragraph/Paragraph'

function App() {

  const description = <div className="description">
  <Paragraph content='Vuoi battute molto americane e poco divertenti? Sei nel posto giusto.' align='left' />
  <Paragraph content='Joke Norris usa le API di chucknorris.io per generare delle battute casuali.' align='right' />
  <Paragraph content='Se te le vuoi scegliere, sei nel posto sbagliato.' align='center' />
</div>

  return (
    <div className="App">
      <div className="titles">
        <Title title="Joke Norris" />
        <Subtitle subtitle = "Chuck Norris Joke Generator" />
      </div>
      {/* Display description only on desktop using js*/}
      {window.innerWidth > 768 && description}
      <img src="./Illustration.png" alt="Chuck Norris API Illustration" />
    </div>
  )
}

export default App
