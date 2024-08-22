import BgCover from '../../../assets/dara.png'
const Index = ()=>{
    return (
        <div className="w-full h-[70vh] bg-white flex justify-center">
            <div className="w-3/4 h-full">
                <div className="w-full  flex mt-10 justify-center items-center text-xl font-poppins font-semibold">
                    Meet <span className="text-primaryColor ml-2 text-xl">Our Team</span>
                </div>
                <div className="flex mt-10 gap-2">
                    <div className="w-[30%] h-80 relative rounded-xl bg-black p-5 flex flex-col justify-end bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${BgCover})`}}>
                        <div className="text-sm text-white font-semibold font-poppins">Gbenle OluwaDara</div>
                        <div className="text-smmx text-white font-poppins">CEO/Co-founder</div>
                    </div>
                    <div className="w-[30%] h-80 relative rounded-xl bg-black p-5 flex flex-col justify-end bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${BgCover})`}}>
                        <div className="text-sm text-white font-semibold font-poppins">Gbenle OluwaDara</div>
                        <div className="text-smmx text-white font-poppins">CEO/Co-founder</div>
                    </div>
                    <div className="w-[30%] h-80 relative rounded-xl bg-black p-5 flex flex-col justify-end bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${BgCover})`}}>
                        <div className="text-sm text-white font-semibold font-poppins">Gbenle OluwaDara</div>
                        <div className="text-smmx text-white font-poppins">CEO/Co-founder</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Index;