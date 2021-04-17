import Expenses from './components/Expenses.js'


function App(props) {

  return (
    <div>
      <h2>Lets Get Started</h2>
      <Expense const={props.expenses}/>
    </div>
  )
}

export default App;
