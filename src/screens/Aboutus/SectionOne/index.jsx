import BgCover from '../../../assets/big-logo.png'
import Shield from '../../../assets/shield.png'
const Index = ()=>{
    return (
        <div className="w-full h-[100vh] relative relative bg-black bg-no-repeat object-top-right" style={{backgroundImage:`url(${BgCover})`}} >
             
             <div className='w-full h-full flex justify-center'  
              style={{
                background: 'conic-gradient(from 90deg at 50% 50%, rgba(5, 126, 116, 0.8) 0deg, rgba(1, 24, 22, 0.8) 53.36deg, rgba(5, 126, 116, 0.8) 360deg)',
               
              }}
                >
                    <div className='w-3/4 h-full flex items-center gap-5'>
                        <div className='flex-1'>
                            <div className='text-white text-3xl font-semibold font-poppins'>Why Choose <span className='text-primaryColor'>SMS</span></div>
                            <div className='text-primaryColor text-4xl font-poppins font-semibold'>Protect?</div>
                            <p className='mt-4 text-smmx font-poppins text-white'>According to the NIBSS, overall fraud attempts in Nigeria increased by 187% between 2019 and 2020 alone. The high poverty in the continent contributes to people easily falling prey to fraudulent attacks. Therefore, our mission is to revolutionize online security and ensure your digital protection in an ever-changing landscape.</p>
                            <p className='mt-2 text-smmx font-poppins text-white'>
                              Our app leverages the power of deep learning technology to detect fraudulent patterns, identify malicious URLs, and protect your messages from scam attacks. We seek to help people stay protected in their digital interactions through:
                            </p>
                        </div>
                        <div className='flex-1 p-10 rounded-xl h-[80%]' style={{ backgroundColor: 'rgba(6, 30, 27, 0.7)'}} >
                            <div className='flex flex-row gap-4 mb-4 h-[25%]'>
                                <div>
                                    <div className='w-14 h-14 rounded-tl-[10px] rounded-br-[10px] bg-lightBlue flex justify-center items-center'>
                                        <img src={Shield} className='w-1/2'/>
                                    </div>
                                </div>
                                <div>
                                    <div className='font-poppins text-md text-white font-semibold'>Advanced Technology</div>
                                    <div className='text-smmx text-white mt-1'> Our AI-driven technology offers unmatched protection against messaging fraud.</div>
                                </div>
                            </div>
                            <div className='flex-1 flex flex-row gap-4 mb-4 h-[25%]'>
                                <div>
                                    <div className='w-14 h-14 rounded-tl-[10px] rounded-br-[10px] bg-lightBlue flex justify-center items-center'>
                                        <img src={Shield} className='w-1/2'/>
                                    </div>
                                </div>
                                <div>
                                    <div className='font-poppins text-md text-white font-semibold'>User Empowerment</div>
                                    <div className='text-smmx text-white mt-1'> We aim to give users control over their digital communications and data.</div>
                                </div>
                            </div>
                            <div className='flex flex-row gap-4 mb-4 h-[25%]'>
                                <div>
                                    <div className='w-14 h-14 rounded-tl-[10px] rounded-br-[10px] bg-lightBlue flex justify-center items-center'>
                                        <img src={Shield} className='w-1/2'/>
                                    </div>
                                </div>
                                <div>
                                    <div className='font-poppins text-md text-white font-semibold'>Innovation</div>
                                    <div className='text-smmx text-white mt-1'> We are committed to staying ahead of the curve by continuously improving our technology.</div>
                                </div>
                            </div>
                            <div className='flex flex-row gap-4 mb-4 h-[25%]'>
                                <div>
                                    <div className='w-14 h-14 rounded-tl-[10px] rounded-br-[10px] bg-lightBlue flex justify-center items-center'>
                                        <img src={Shield} className='w-1/2'/>
                                    </div>
                                </div>
                                <div>
                                    <div className='font-poppins text-md text-white font-semibold'>Integrity</div>
                                    <div className='text-smmx text-white mt-1'> We operate with transparency and honesty in everything we do.</div>
                                </div>
                            </div>
                        </div>
                    </div>
           
           </div>
          
            
            

        </div>
    )
}

export default Index;