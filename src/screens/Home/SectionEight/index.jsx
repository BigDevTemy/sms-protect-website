import Mobile from '../../../assets/mobile.png'
import PlayStore from '../../../assets/Playstore.png'

const Index = ()=>{
    return (
        <div className="w-full h-96 mt-10 flex flex-row relative justify-center items-center">
            <div className='w-3/4 h-64 relative p-10 rounded-2xl bg-blackNew flex flex-row justify-start'>
              <div className='flex-[0.8]'>
                <div className='font-poppins text-white text-2xl'>Download the App Now</div>
                <div className='font-poppins text-white text-smmx mt-5'>
                    Ready to take control of your message security? Download SMS Protect today!
                </div>
                <div className='w-40 mt-4 h-10 cursor-pointer bg-white flex justify-content items-center rounded-xl p-6'>
                    <img src={PlayStore}/>
                    <div className='flex flex-col w-full'>
                        <div className='font-poppins text-smmx '>GET IT ON</div>
                        <div className='text-smmx font-semibold'>Google Play</div>
                    </div>
                </div>
              </div>
              
            </div>
            <div className=' w-3/4 flex-1 absolute  flex justify-end mr-12 ' style={{top:'-1%'}}>
                <img src={Mobile} className='h-72' />
            </div>
        </div>
    )
}

export default Index