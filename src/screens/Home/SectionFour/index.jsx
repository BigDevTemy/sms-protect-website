import BgCover from '../../../assets/revolution.jpeg'
import Shield from '../../../assets/bigger-shield.png'
import Back from '../../../assets/ep_back.png'
const Index = ()=>{
    return (
        <div className="w-full h-full mt-10 flex flex-row relative justify-center items-center">
            <div className='w-3/4 h-96 mt-10 p-14 rounded-2xl bg-gradient-to-r from-[#011816] to-[#0D3D39] flex flex-row justify-center'>
                <div className='flex-[0.8]'>
                    <div className='text-md font-poppins text-primaryColor'>You will also enjoy:</div>
                    <div className='w-full h-full flex flex-col '>
                            <div className='mt-4 flex flex-row'>
                                <div className='w-10 h-10 rounded-full flex justify-center items-center bg-gradientGreen'>
                                <img src={Back}/>
                                </div>
                                <div className='flex flex-col justify-center text-white ml-4'>
                                        <div className='text-sm'>Real-Time Scanning</div>
                                        <div className='text-smmx'>Instant analysis of SMS and WhatsApp messages.</div>
                                </div>
                            </div>

                            <div className='mt-4 flex flex-row'>
                                <div className='w-10 h-10 rounded-full flex justify-center items-center bg-gradientGreen'>
                                    <img src={Back}/>
                                </div>
                                <div className='flex flex-col justify-center text-white ml-4'>
                                        <div className='text-sm'>URL Protection</div>
                                        <div className='text-smmx'>Instant analysis of SMS and WhatsApp messages.</div>
                                </div>
                            </div>

                            <div className='mt-4 flex flex-row'>
                                <div className='w-10 h-10 flex justify-center items-center rounded-full bg-gradientGreen'>
                                    <img src={Back}/>
                                </div>
                                <div className='flex flex-col justify-center text-white ml-4'>
                                        <div className='text-sm'>Adaptive Learning</div>
                                        <div className='text-smmx'>Continuously updates to counteract evolving threats.</div>
                                </div>
                            </div>
                            <div className='mt-4 flex flex-row'>
                                <div className='w-10 h-10 flex justify-center items-center rounded-full bg-gradientGreen'>
                                <img src={Back}/>
                                </div>
                                <div className='flex flex-col justify-center text-white ml-4'>
                                        <div className='text-sm'>User-Friendly Experience</div>
                                        <div className='text-smmx'>Easy to use with minimal setup required.</div>
                                </div>
                            </div>

                    </div>
                </div>
                <div className='flex-[0.5] flex justify-center items-center'>
                        <img src={Shield} className='w-[100%]'/>
                </div>
            </div>
        </div>
    )
}

export default Index