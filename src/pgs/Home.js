import Marquee from "../comps/Marquee";
import Navigation from '../comps/Navigation';
import ImageCarousel from '../comps/ImageCarousel'
import TagCarousel from '../comps/TagCarousel'
import ArticleCardWithClickbait from "../comps/ArticleCards"
import { CongressObj, WarObj, GossObj, GovernanceObj } from "../assets/Headlines";
import ScrollToTop from "react-scroll-to-top";

function Home() {
    return (
        <>
        <Navigation />
        <Marquee />
        <ImageCarousel />
        <TagCarousel />
        <ArticleCardWithClickbait {...CongressObj} />
        <ArticleCardWithClickbait {...WarObj}/>
        <ArticleCardWithClickbait {...GossObj}/>
        <ArticleCardWithClickbait {...GovernanceObj} />
        <ScrollToTop />
        </>
    )
}
export default Home
