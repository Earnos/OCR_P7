
function Banner({banner, text}) {
    return (
    <div className='bannerContainer banner-accueil-mobile'>   
    <img src={banner} alt="Bannière page d'accueil" className='banner banner-img-accueil-mobile' />
    {text ? <p className='banner-text banner-text-accueil-mobile' >{text}</p> : null }
    </div> 
    )
}

export default Banner