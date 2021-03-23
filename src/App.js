// function App() {
//   const greeting = 'Hi'
//   const dom = <div className="App">{greeting}</div>
//   return (
//     dom
//   );
// }

const App = () => {
  return (
    <div>
      <Cat></Cat>
      <Cat></Cat>
    </div>
  )
}

const Cat = () => {
  return <div>Meow</div>
}
export default App;
