import Logo from '../../assets/Logo.png'
import Submit from '../../assets/submit.png'
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Whatsapp from '../../assets/whatsapp.png'
const Index = ()=>{
    return (
        <div className="w-full h-80 bg-darkPurple flex flex-col justify-center items-center">
          <div className="w-3/4 h-full text-white flex flex-row" style={{marginTop:'5%'}}>
                <div className="flex-1">
                    <img src={Logo} className='w-1/2'/>
                    <div className='flex flex-row gap-2 mt-4'>
                        <div className='w-8 h-8 rounded-full bg-red-500 p-1 flex justify-center items-center' style={{backgroundColor:'#222'}}>
                            <img src={Facebook}/>
                        </div>
                        <div className='w-8 h-8 rounded-full bg-red-500 p-1 flex justify-center items-center' style={{backgroundColor:'#222'}}>
                            <img src={Twitter}/>
                        </div>
                        <div className='w-8 h-8 rounded-full bg-red-500 p-1 flex justify-center items-center' style={{backgroundColor:'#222'}}>
                            <img src={Instagram}/>
                        </div>
                        <div className='w-8 h-8 rounded-full bg-red-500 p-1 flex justify-center items-center' style={{backgroundColor:'#222'}}>
                            <img src={LinkedIn}/>
                        </div>
                        <div className='w-8 h-8 rounded-full  p-1 flex justify-center items-center' style={{backgroundColor:'#222'}}>
                            <img src={Whatsapp}/>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className='font-poppins font-semibold text-white text-sm mb-4'>Company</div>
                    <div className='font-poppins text-white text-smmx mb-2'>About us</div>
                    <div className='font-poppins text-white text-smmx mb-2'>Blog</div>
                    <div className='font-poppins text-white text-smmx mb-2'>Contact us</div>
                    <div className='font-poppins text-white text-smmx mb-2'>Pricing</div>
                </div>
                <div className="flex-1">
                    <div className='font-poppins font-semibold text-white text-sm mb-4'>Legal</div>
                    <div className='font-poppins text-white text-smmx mb-2'>Terms of service</div>
                    <div className='font-poppins text-white text-smmx mb-2'>Privacy Policy</div>
                </div>
                <div className="flex-1">
                <div className='font-poppins font-semibold text-white text-sm mb-4'>Stay up to Date</div>
                    <div className='text-smmx font-poppins'>
                    Subscribe to our newsletter and be the first to know about new features, security alerts, and exclusive content from SMS Protect.
                    </div>
                    <div className='mt-5 w-full h-10 rounded-2xl flex flex-row bg-darkPurple'>
                        <input type="text" placeholder='Your email address' className='text-smmx flex-1 text-white bg-darkPurple focus:outline-none'/>
                        <img src={Submit} className='mt-2 ml-2' style={{width:20,height:20}}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index