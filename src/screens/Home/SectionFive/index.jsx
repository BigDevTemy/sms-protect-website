import Orange from '../../../assets/orange.png'
import Channels from '../../../assets/channels.png'
import FGS from '../../../assets/fgs.png'
const Index = ()=>{
    return (
        <div className="w-full h-44 bg-grayscale mt-20 flex flex-col items-center p-10">
                <div className="text-md font-poppins font-semibold">Tested and Trusted</div>
                <div className="text-smmx font-poppins mt-4">
                Our AI technology has been rigorously tested and trusted by thousands of users worldwide. Join a community that values security
                </div>
                <div className="mt-4 w-1/2 gap-3 flex flex-row justify-center mb-4">
                    <img src={Orange}  style={{width:40,height:40}}/>
                    <img src={Channels} style={{width:40,height:40}}/>
                    <img src={FGS} style={{width:40,height:40}}/>
                </div>
        </div>
    )
}

export default Index