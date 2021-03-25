import PropTypes from 'prop-types'

const App = () => {
  const profiles = [
    {name: 'TARO', age: 10},
    {name: 'HANAKO', age: 5},
    {name: 'HANAKO', age: 6},
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
