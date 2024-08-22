import BgCover from '../../../assets/bg-section-one.png'
import User from '../../../assets/user.png'
import Lock from '../../../assets/lock.png'
const Index = ()=>{
    return (
        <div className="w-3/4 h-96 rounded-2xl flex flex-row relative bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${BgCover})`}}>
            <div className='w-full h-full bg-black/70 rounded-2xl font-poppins px-10 py-10'>
                <div className='text-white w-full flex justify-center font-poppins text-3xl font-semibold mb-10'>Our <span className="ml-2 text-primaryColor font-poppins text-3xl">Solutions</span></div>
                <div className='w-full h-52 flex flex-row gap-4'>
                   
                    <div className='flex flex-col flex-1 bg-white rounded-xl p-5'>
                        <div className='w-10 h-10 rounded-tl-[10px] rounded-br-[10px] bg-lightBlue flex justify-center items-center'>
                           <img src={User} className='w-1/2'/>
                        </div>
                        <div className='mt-2 font-bold text-md font-poppins'>Personal Security App</div>
                        <div className='text-smmx font-poppins mt-4 '>
                        Our AI-driven app scans your SMS and WhatsApp messages for fraudulent links and scam patterns, providing real-time protection..
                        </div>
                        <div className='w-full flex flex-row justify-end text-smm text-primaryColor mt-4 cursor-pointer'>Learn more</div>
                    </div>
                    <div className='flex flex-col flex-1 bg-white rounded-xl p-5'>
                        <div className='w-10 h-10 rounded-tl-[10px] rounded-br-[10px] bg-lightPurple flex justify-center items-center'>
                        <img src={Lock} className='w-1/2'/>
                        </div>
                        <div className='mt-2 font-bold text-md font-poppins'>Enterprise Mobile Security</div>
                        <div className='text-smmx font-poppins mt-4'>
                            Manage and secure company-wide communications with advanced features tailored for businesses.
                        </div>
                        <div className='w-full flex flex-row justify-end text-smm text-primaryColor mt-4 cursor-pointer'>Learn more</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;