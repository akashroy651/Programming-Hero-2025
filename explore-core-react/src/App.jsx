 
import './App.css'
import ToDo from './Todo'

function App() {
  

  return (
    <>
      
      <h1>Vite + React</h1>
    <ToDo task="Learn React" isDone={true}></ToDo>
    <ToDo task="Revise JS" isDone={false}></ToDo>
    <ToDo task="take a shower" isDone={true}></ToDo>
      {/* <Person></Person>
      <Student></Student>
      <Person></Person>
      <Developer name="akash" tech="JS"></Developer>
      <Developer name="tanim" tech="python"></Developer>
      <Developer name="ashik" tech="java"></Developer>
     <Player name="Tamim" runs="5083"></Player>
      <Salami event="puja" tk="500"></Salami> */}
    </>
  )
}

function Salami({event, tk}){
  return(
    <div className='student'>
      <p>Salami For: {event}</p>
      <p>Amount: {tk}</p>
    </div>
  )
}


function Player({name, runs}){

  return(
    <div>
      <h3>Nmae: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}


function Developer(props){
console.log(props); 
  return(
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

function Person(){
  
  const name = 'akash';
  const age = '21';

  const personStyle = {
    color: 'red'
  }
  return(
    <p style={personStyle}>I am a person {name} {age}</p>
  )
}

function Student(){
  return(
    <div className='student'>
      <h1>name:</h1>
      <h1>Dept:</h1>
    </div>
  )
}
export default App
