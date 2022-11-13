import banner from '../assets/banner.png'

function Banner() {
    return (
    <div className='bannerContainer'>   
    <img src={banner} alt="Bannière page d'accueil" className='banner' />
    <p className='banner-text' >Chez vous, partout et ailleurs</p>
    </div> 
    )
}

export default Banner