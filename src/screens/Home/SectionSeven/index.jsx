import startquote from '../../../assets/startquote.png'
import endquote from '../../../assets/endquote.png'
import Previous from '../../../assets/arrow-previous.png'
import Next from '../../../assets/arrow-next.png'
const Index = ()=>{
    return (
        <div className="w-full mt-28 h-48 bg-purple flex flex-col items-center justify-center">
            
           <div className='w-3/4 h-full flex flex-col justify-center'>
                <div className='font-poppins text-3xl text-primaryColor font-semibold'>Start Protecting Your Messages Today</div>
                <div className='text-smmx text-white font-poppins'>Join thousands of users who trust SMS Protect for their message security.</div>
                <div className='mt-4 w-24 h-10 bg-white text-black text-smmx font-poppins cursor-pointer flex justify-center items-center rounded-2xl'>Get Started</div>
           </div>
            
        </div>
    )
}

export default Index