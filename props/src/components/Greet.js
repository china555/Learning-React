
function Greet(props){
    console.log(props)
    return <h1> Hello {props.name} {props.sex} </h1>
}

// export const Greet = () => <h1>Hello </h1>
export default Greet