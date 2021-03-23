
const App = () => {
  const profiles = [
    {name: 'TARO', age: 10},
    {name: 'HANAKO', age: 5},
    {name: 'HANAKO'},
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}></User>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name} and {props.age} years old</div>
}

User.defaultProps = {
  age: 1
}
export default App;
