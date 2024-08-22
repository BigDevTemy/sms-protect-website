import startquote from '../../../assets/startquote.png'
import endquote from '../../../assets/endquote.png'
import Previous from '../../../assets/arrow-previous.png'
import Next from '../../../assets/arrow-next.png'
const Index = ()=>{
    return (
        <div className="w-full h-96 bg-white flex flex-col items-center justify-center">
            
            <div className="text-3xl mt-40 text-blackNew font-poppins font-semibold">What Our Users Say.</div>
            <div className="w-3/4 h-52 rounded-xl mt-8 bg-gradient-to-r from-[#011816] to-[#0D3D39] flex flex-col p-5">
                <div  className='w-full'>
                    <img src={startquote} />
                </div>
                <div className='w-full h-full flex flex-col items-center text-center'>
                    <div className='w-3/4 flex flex flex-col'>
                        <div className='flex flex-row w-full justify-center mb-5'>
                            <div className='w-10 h-10 rounded-full bg-white'></div>
                            <div className='ml-2'>
                                <div className='text-sm text-white'>John Smith</div>
                                <div className='text-smmx text-white'>Manager</div>
                            </div>
                        </div>
                        <div className=' text-white font-poppins text-smmx'>As an IT professional, I was impressed by the advanced AI technology used by SMS Protect. The app is user-friendly and offers detailed reports that help me stay on top of potential threats. Highly recommended for anyone serious about their digital security!</div>
                    </div>
                </div>
                <div className='w-full flex justify-end'>
                    <img src={endquote} />
                </div>
            </div>
            <div className='w-full h-auto flex flex-row justify-center mt-5'>
                <img src={Previous} className='cursor-pointer'/>
                <img src={Next} className='cursor-pointer'/>
            </div>
        </div>
    )
}

export default Index