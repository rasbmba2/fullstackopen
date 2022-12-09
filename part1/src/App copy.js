const Header =(props){
  return(
    <h1>{props.course}</>
  )
}

  
  const App = () => {
  
    const course = "Half Stack application development"
    const parts =[
     {
      name: "Fundamentals of React"
      exercises1 : 10

    },
   
    {
     name: 'Using props to pass data'
     exercises2 : 7
    },
    {
     name : 'State of a component'
      exercises3 : 14
    }
  ]
  
    return (
        <div>
           <Header course ={course}/>
          
        </div>
    )
  
  }
  
  export default App
  