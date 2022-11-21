import React from "react"
import { useFetch } from "../utils/hooks/useFetch"
import Card from "../components/Card"
import Banner from '../components/Banner'
import PropTypes from "prop-types"

function Accueil() {
    const { data, isLoading, error } = useFetch("../data/data.json")
    // const logementsList = data?.data

        if (isLoading) return <h1>Chargement...</h1>

        if (error) console.log(error)

        return (
            <main className="main-accueil" >
                <Banner />
                <div className="accueil-container">
                {data.map(data => (
                    <Card
                    key={data?.id}
                    cover={data?.cover}
                    title={data?.title}
                    />
                ))}
               </div>
            </main>
    )
}

Accueil.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Accueil

