const Greet = () =>{

    let name = "John Doe"
    const date = () =>{
        return new Date().toLocaleDateString()
    }
    return(
        <div>
            <h1>Greetings Users</h1>
            <p>Welcome, {name}!</p>
            <p>Today's date is: {date()}</p>
        </div>
    )
}

export default Greet