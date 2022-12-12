import Banner from "../components/Banner"
import banner from "../assets/bannerPropos.png"

function Apropos() {
    return (
        <main className="propos-container">
            <div className="propos-banner" >
                <Banner banner={banner} />
            </div>
        </main>
        
    )
}

export default Apropos