import Hero from './Hero'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionDownload from '../Home/SectionEight'

const Index= ()=>{
    return (
            <div className="w-full min-h-96 h-full">
                    <Hero/>
                    <SectionOne/>
                    <SectionTwo/>
                    <SectionThree/>
                    <SectionDownload/>
            </div>
    )
}

export default Index