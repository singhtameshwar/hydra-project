import {ANALYTICS} from "@/components/analytic"
import {MARQUE} from "@/components/common/marque"
import {BENEFITSECTION} from "@/components/card"
import {STRATEGY} from "@/components/strategy"
import {SHARING} from "@/components/sharing"
import {FEATURESECTION} from "@/components/featuresection"
import {HeroSection} from "@/components/herosection"
import {PRICINGSECTION} from "@/components/common/pricing"
import {Footer} from "@/components/common/footer"
import {HERO} from "@/components/hero"

export default function Home() {
  return (
    <>
    <ANALYTICS/>
    <MARQUE/>
    <BENEFITSECTION/>
    <STRATEGY/>
    <SHARING/>
    <FEATURESECTION/>
    <HeroSection/>
    <PRICINGSECTION/>
    <HERO/>
    <Footer/>
    </>
  );
}
