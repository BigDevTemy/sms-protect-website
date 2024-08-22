import BgCover from '../../../assets/revolution.jpeg'
import Shield from '../../../assets/shield.png'
import Winter from '../../../assets/winter.png'
import GreenShield from '../../../assets/green-shield.png'
const Index = ()=>{
    return (
        <div className="w-full h-auto flex flex-row relative bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${BgCover})`}}>
            <div className='w-full h-full bg-gradient-to-r from-[#011816] to-[#0D3D39]/60 flex flex-col items-center'>
                <div className='w-3/4 h-full py-10'>
                    <h1 className='text-white text-poppins font-poppins text-3xl font-semibold'>Our Revolutionary</h1>
                    <h1 className='text-poppins font-poppins text-3xl text-primaryColor font-semibold'>AI-Powered</h1>
                    <h1 className='text-poppins font-poppins text-3xl text-primaryColor font-semibold'>Protection</h1>
                    <div className='text-white text-smmx mt-4'>offer by :</div>
                    <div className='mt-4 h-72 flex flex-row rounded-xl bg-blackNew p-10 gap-3'>
                            <div className='flex-1'>
                                <div className='w-10 h-10 rounded-tl-[10px] rounded-br-[10px] bg-lightBlue flex justify-center items-center'>
                                    <img src={Shield} className='w-1/2'/>
                                </div>
                                <div className='text-white font-poppins mt-4'>Unmatched Security</div>
                                <div className='text-white font-poppins text-smmx mt-4'>
                                    Our state-of-the-art AI algorithms are designed to scan and analyze your SMS and WhatsApp messages in real-time. By identifying and neutralizing threats instantly, our AI keeps your communications secure.
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div className='w-10 h-10 rounded-tl-[10px] rounded-br-[10px] bg-lightOrange flex justify-center items-center'>
                                    <img src={Winter} className='w-1/2'/>
                                </div>
                                <div className='text-white font-poppins mt-4'>Intelligent Threat Detection</div>
                                <div className=' text-white font-poppins text-smmx mt-4'>
                                    Our AI continuously learns from new data, adapting to the latest cyber threats. It meticulously scans every message and URL, detecting phishing attempts, fraudulent links, and other malicious activities before they reach you.
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div className='w-10 h-10 rounded-tl-[10px] rounded-br-[10px] bg-lightGreen flex justify-center items-center'>
                                    <img src={GreenShield} className='w-1/2'/>
                                </div>
                                <div className='text-white font-poppins text-md mt-4'>Seamless Integration</div>
                                <div className='text-white font-poppins text-smmx mt-4'>
                                    SMS Protect’s AI integrates effortlessly with your device, providing constant protection without disrupting your daily activities. Enjoy peace of mind knowing that your messages are under the vigilant watch of our advanced AI.
                                </div>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Index;