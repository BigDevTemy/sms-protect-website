import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

const Index = ()=>{
    return (
        <div className="w-full flex flex-col items-center fixed bg-white" style={{zIndex:1000}}>
            <div className="w-3/4 h-14 bg-white flex flex-row justify-start items-center">
                <div className="flex-[0.2] p-4 flex flex-row items-center ">
                    <img src={Logo}/>
                </div>
                <div className="flex-1 flex flex-row items-center p-4">
                    <div className="flex-1 text-center text-sm cursor-pointer font-poppins"><Link to={'/'}>Home</Link></div>
                    <div className="flex-1 text-center text-sm cursor-pointer font-poppins"><Link to={'/about-us'}>About us</Link></div>
                    <div className="flex-1 text-center text-sm cursor-pointer font-poppins">Product</div>
                    <div className="flex-1 text-center text-sm cursor-pointer font-poppins"><Link to={'/contact-us'}>Contact</Link></div>
                    <div className="flex-1 text-center text-sm cursor-pointer font-poppins"><Link to={'/faq'}>FAQ</Link></div>
                    <div className="flex-1 text-center text-sm cursor-pointer font-poppins"><Link to={'/blog'}>Blog</Link></div>
                </div>
                <div className="flex-[0.2] flex flex-row items-center justify-end px-2 ">
                    <div className='text-sm cursor-pointer text-primaryColor font-poppins'>Login</div>
                    <div className='ml-5 w-20 h-8 rounded-xl  text-sm flex justify-center items-center bg-primaryColor text-white'>Get App</div>
                </div>
            </div>
            <hr className="w-full border-1"/>
        </div>
        
    )
}

export default Index