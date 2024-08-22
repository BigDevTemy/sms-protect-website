
import BgCover from '../../../assets/section_2.png'
const Index = ()=>{
    return(
        <div className="w-full h-auto bg-white  flex flex-row relative" >
            <div className="w-full mt-16 bg-white w-full h-full bg-lightGreen px-40 p-10 flex flex-row gap-8">
                <div className="flex-[0.8]  bg-red-100 rounded-xl flex flex-row relative bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${BgCover})`}}>

                </div>
                <div className="flex-1">
                    <div className="text-black text-3xl font-bold">About <span className="text-poppins text-3xl text-primaryColor">Us</span></div>
                    <div className=" w-full mt-6 text-poppins text-sm text-left">
                        SMS Protect is an AI company dedicated to solving cybersecurity problems by analyzing SMS messages, URLs, and URLs within SMS messages to alert users if the received SMS is fraudulent. Our offerings include an individual app and enterprise solutions, which are further divided into an enterprise mobile app and an API solution. We need a website that clearly conveys our services, facilitates easy navigation, and converts visitors into customers.
                    </div>
                    <div className="text-smmx text-poppins text-primaryColor mt-8 cursor-pointer">Learn more</div>
                </div>
            </div>
        </div>
    )
}

export default Index