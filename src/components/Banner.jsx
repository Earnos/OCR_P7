
function Banner({banner, text}) {
    return (
    <div className='bannerContainer'>   
        <img src={banner} alt="Bannière page d'accueil" className='banner' />
        {text ? <p className='banner-text banner-text-accueil-mobile' >{text}</p> : null }
    </div> 
    )
}

export default Banner