import { useState, useEffect } from 'react'
import './App.css'
import Title from './components/Title/Title'
import Subtitle from './components/Subtitle/Subtitle'
import Paragraph from './components/Paragraph/Paragraph'
import Joke from './components/Joke/Joke'
import Button from './components/Button/Button'

function App() {

  const description = <div className="description">
  <Paragraph content='Vuoi battute molto americane e poco divertenti? Sei nel posto giusto.' align='left' />
  <Paragraph content='Joke Norris usa le API di chucknorris.io per generare delle battute casuali.' align='right' />
  <Paragraph content='Se te le vuoi scegliere, sei nel posto sbagliato.' align='center' />
</div>

  const [joke, setJoke] = useState('');
  // Load a joke on page load using useEffect
  const getJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => setJoke(data.value))
      .then(setCopied(false))
  }
  useEffect(getJoke, [])

  const [copied, setCopied] = useState(false);

  return (
    <div className="App">
      <img src="./Illustration.png" width={"120px"} alt="Chuck Norris API Illustration" />
      <div className="titles">
        <Title title="Joke Norris" />
        <Subtitle subtitle = "Chuck Norris Joke Generator" />
      </div>
      {/* Display description only on desktop using js*/}
      {window.innerWidth > 768 && description}
      <div className="jokeContainer">
        <Joke content={joke} />
        <Button size={"small"} value={copied ? "Copiato ✅" : "Copia 📋"} disabled={copied} onClick={() => {navigator.clipboard.writeText(joke);setCopied(true)}} />
      </div>
      <Button value="Carica joke" onClick={getJoke} width={"40%"} size={'large'}/>
    </div>
  )
}

export default App
