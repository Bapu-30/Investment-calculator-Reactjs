import { useState } from "react"
import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"

function App() {
  const [values, setvalues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  function handleChange(e) {
    setvalues((prev) => {
      return { ...prev, [e.target.name]: Number(e.target.value) }
    })

  }

  const inputIsValid = values.duration >= 1

  return (
    <>
      <Header />
      <UserInput values={ values } onChange={ handleChange } />
      { inputIsValid ? <Results userInputs={ values } /> : <p className="center">Duration must be greater than zero</p> }
    </>
  )
}

export default App
