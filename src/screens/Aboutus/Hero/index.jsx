import BgCover from '../../../assets/section_2.png'
const Index = ()=>{
    return (
        <div className="w-full h-[70vh] bg-lightGreen flex flex-col justify-center items-center">
            <div className="w-3/4 h-full flex flex-row justify-between items-center mt-20 gap-4">
                    <div className="flex-[0.5]">
                        <h1 className='text-4xl font-poppins font-bold mb-2'>About</h1>
                        <h1 className=' text-5xl font-poppins text-primaryColor font-bold mb-4'>SMS Protect</h1>
                        <div className='font-poppins text-md'>At SMS Protect, we leverage cutting-edge AI to combat cybersecurity threats. Our solutions analyze SMS messages and URLs to alert you of potential fraud. Whether you're an individual or an enterprise, our app and API solutions offer robust protection tailored to your needs.</div>
                    </div>
                    <div className="flex-[0.5] h-full  flex flex-row justify-center items-center">
                        <img src={BgCover} className='rounded-xl w-3/4 h-[55%]'/>
                    </div>
                   
            </div>
        </div>
    )
}

export default Index;