import Home from '../Home'
import NavBar from '../../../src/component/NavBar'
import Footer from '../../../src/component/Footer'
import { Outlet } from 'react-router-dom'

const Index=()=>{
    return(
        <div className='w-full h-full'>
            <NavBar/>
            <Outlet/>
            <Footer/>
           
        </div>
    )
}

export default Index