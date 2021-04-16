import Expense from './components/Expense'


function App(props) {

  return (
    <div>
      <h2>Lets Get Started</h2>
      <Expense const={props.expense}/>
    </div>
  )
}

export default App;
