import HeroImage from '../../../assets/Hero.png'
const Index = ()=>{
    return (
        <div className="w-3/4 h-full flex flex-row relative">
           <div className='w-1/2 absolute  h-full flex flex-col justify-center'>
               <div className='w-full flex flex-col'>
                <div className='flex flex-row w-full mb-6 mt-8'>
                    <div className='text-primaryColor font-bold text-2xl tracking-wider font-poppins' style={{fontSize:50}}>Fortify</div><div className='text-black font-bold text-2xl ml-2' style={{fontSize:50}} >Your Digital</div>
                </div>
                <div className='mb-6 w-full -tracking-2'>
                    <div className='text-primaryColor font-bold text-2xl tracking-wider' style={{fontSize:50}}>Communications</div>
                </div>
                <div className='mb-2 w-full -tracking-2'>
                <div className='text-black font-bold text-2xl tracking-wider font-poppins' style={{fontSize:50}}>with Advance AI</div>
                </div>
                <div className='text-black text-sm mt-8 font-poppins'>
                    Experience the future of cybersecurity with SMS Protect's cutting-edge AI technology, ensuring your messages remain safe and secure.
                </div>
                <div className='flex flex-row justify-start items-center mt-6'>
                    <div className='w-20 flex flex-row justify-center items-center p-2 h-10 rounded-2xl bg-primaryColor text-sm text-white cursor-pointer font-poppins'>Get App</div>
                    <div className='text-sm text-primaryColor ml-4 cursor-pointer font-poppins'>Enterprise Login</div>
                </div>
                    
                   
               </div>
           </div>
            <img src={HeroImage} className='mt-16'/>
        </div>
    )
}

export default Index;