import Hero from './Hero'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'
import SectionSeven from './SectionSeven'
import SectionEight from './SectionEight'
const Index = ()=>{
    return (
        <div className="w-full h-full flex flex-col items-center">
           <Hero/>
           <SectionOne/>
           <SectionTwo/>
           <SectionThree/>
           <SectionFour/>
           <SectionFive/>
           <SectionSix/>
           <SectionSeven/>
           <SectionEight/>
        </div>
    )
}

export default Index