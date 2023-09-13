import { useState } from 'react'
import data from './data'
import List from './List'
const App = () => {
  const [people, setPeople] = useState(data)
  const handleClick = () => {
    setPeople([])
  }

  return (
    <div className="container">
      <h2>{people.length} Birthdays Today</h2>
      <List people={people} />
      <button type="button" className="btn btn-block" onClick={handleClick}>
        Clear All
      </button>
    </div>
  )
}
export default App
