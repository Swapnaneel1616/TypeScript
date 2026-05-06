import ClickEvent from "./component/ClickEvent"
import Footer from "./component/Footer"
import Greet from "./component/greet"
import Header from "./component/Header"
import MainContent from "./component/MainContent"
import Person from "./component/Person"
import ProductInfo from "./component/ProductInfo"
import StyleCard from "./component/StyleCard"
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
      <StyleCard />
      <ClickEvent />
    </div>
  )
  
}




export default App