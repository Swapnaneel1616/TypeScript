import Footer from "./component/Footer"
import Greet from "./component/greet"
import Header from "./component/Header"
import MainContent from "./component/MainContent"
import Person from "./component/Person"
import ProductInfo from "./component/ProductInfo"
import UserList from "./component/UserList"
import Weather from "./component/Weather"

const App = () =>{
  return(
    <div>
      <Greet />
      <ProductInfo />
      <UserList />
      <Person name="Alice" age={25} />
      <Weather temperature={20} />
    </div>
  )
  
}




export default App