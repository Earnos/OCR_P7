import Banner from "../components/Banner"
import banner from "../assets/bannerPropos.png"
import { useFetch } from "../utils/hooks/useFetch"
import DropDownMenu from "../components/DropDownMenu"

function Apropos() {
    const { data, isLoading, error } = useFetch("data/data.json")

    if (isLoading) return <div className="spinner-container" ><div className="spinonediv-1"></div></div>
    if (error) console.log(error)
    
    return (
        <main className="propos-container">
            <div className="propos-banner" >
                <Banner banner={banner} />
            </div>
            <div style={{margin: "5%", width: "192%"}} >
                <DropDownMenu data={data} />
            </div>
        </main>
        
    )
}

export default Apropos