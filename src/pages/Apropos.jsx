import Banner from "../components/Banner"
import banner from "../assets/bannerPropos.png"
import { useFetch } from "../utils/hooks/useFetch"
import DropDownMenu from "../components/DropDownMenu"

function Apropos() {
    const { data, isLoading, error } = useFetch("data/apropos.json")
    
    if (isLoading) return <div className="spinner-container" ><div className="spinonediv-1"></div></div>
    if (error) console.log(error)
    
    return (
        <main className="propos-container">
            <div id="propos-banner" >
                <Banner banner={banner} />
            </div>
            <div className="dropdown-apropos-container">
                {
                data.map((item, index) => (
                    <DropDownMenu key={"drop" + index} title={item?.title} text={item?.content} />
                ))
                }
            </div>
        </main>
        
    )
}

export default Apropos