import Header from './layout/header'
import Footer from './layout/footer'
import { Outlet } from 'react-router-dom'
//component = html + css + js
//Chuyen doi sang EC6 arrow function


const App = () => {

  return (
    <>
    <Header></Header>
    <Outlet/>
    <Footer></Footer>
    </>


  )
}

export default App

