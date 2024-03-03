
import './App.css'
import PersonCard from './PersonCard/PersonCard'

function App() {
 

  return (
    <>
      <PersonCard firstName="Doe" lastName="Janes" age={45} hairColor="Black" />
      <PersonCard firstName="Smith" lastName="John" age={88} hairColor="Brown" />
      <PersonCard firstName="Fillmore" lastName="Millard" age={50} hairColor="Bronw" />
      <PersonCard firstName="Smith" lastName="Marin" age={62} hairColor="Bronw" />
    </>
  )
}

export default App
