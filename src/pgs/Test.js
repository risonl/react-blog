import Navigation from "../comps/Navigation"
import HelloWorld from "./HelloWorld"

const names = {
    name1: "John",
    name2: "mary",
}
function Test() { 
    return (
        <>
        <Navigation />
        <HelloWorld 
        {...names}
        />
        <HelloWorld 
        {...names}
        />
        </>
    )
}
export default Test