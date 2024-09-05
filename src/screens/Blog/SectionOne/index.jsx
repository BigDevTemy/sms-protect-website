import { Button, Image } from "antd"
import SecurityCheck from '../../../assets/security-check.png'
const Index= ()=>{
    return (
        <div className="w-full min-h-96 h-auto bg-grayscale flex px-44 py-20 gap-4">
            <div className="w-full flex flex-col justify-center">
                <div className="text-secondaryColor font-semibold font-poppins text-smmx">FEATURED POST</div>
                <div className="text-3xl font-bold font-poppins mt-5 w-[80%]">Enhancing Mobile Banking Security: Using AI model.</div>
                <div className="mt-3 flex gap-3 items-center">
                    <div className="w-20 h-5 rounded-xl bg-deepGray flex justify-center items-center text-smm">
                        Business
                    </div>
                    <div className="w-20 h-5 rounded-xl bg-deepGray flex justify-center items-center text-smm">
                        Tech
                    </div>
                    <div className="font-bold">| </div>
                    <div className="text-black text-smmx font-poppins">June 9,2024</div>
                </div>
                <div className="mt-3 w-[100%] font-poppins mt-4 text-smmx">
                    In an era when using mobile devices for banking has become essential to daily life, it is crucial to protect financial transactions. However, users of mobile banking are at greater risk due to the increase in smishing attacks, which are fraudulent SMS messages sent with the intention of tricking recipients into disclosing personal information. This […]
                </div>
                <div className="mt-2">
                        <Button className="bg-primaryColor text-white rounded-xl">Read more</Button>
                </div>
            </div>
            <div className="w-full">
                <Image src={SecurityCheck} className="w-1/2" />
            </div>
        </div>
    )
}

export default Index