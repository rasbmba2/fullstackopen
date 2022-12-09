//Header
const Header =(props)=>{

  return(
    <h1>{props.course}</h1>
  )
}
//Content
const Content = (props) =>{
  console.log(props)

  return(
    <div>
 
      <Part part ={props.part1.name} exercise= {props.part1.exercises}/>
    
  
    </div>
  )
}
//PARTS
const Part= (props)=>{
  console.log(props)
  return(
    <p>{props.part} {props.exercise}</p>

  )
}
//TOTAL
const Total = (props)=>{
  return(
    <p> Numver of exercises   {props.total}</p>
  )
}
const total = (props)=>{
  return(
    <p>{props.part1.exercises +  props.part2.exercises + props.part3.exercises}</p>

  )
}


const App=()=>{

  const course = 'Half Stack application development'
  const part1 = {
      name :'Fundamentals of React',
      exercises :10
    }
  
  const part2 = {
      name: 'Using props to pass data',
      exercises : 7
    } 
  const part3 = 
      {
        name :'Statte of a component',
      exercises : 14
    }
  


  

  return(

    <div>
      <Header course={course}/>
      <Content 
      part= {part1.name} exercises={part1.exercises}
    
      />
   
      <Total total ={part1.exercises + part2.exercises +part3.exercises }/>


    </div>
  )
}


export default App