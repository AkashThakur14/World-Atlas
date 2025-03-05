import countryFacts from "../api/countryData.json"


export const About = () => {

    return (
        <section className="about-section container">
            <h2 className="about-title">
                Here are the Interesting Facts
                <br />
                we're Proud of
            </h2>
            <div className="gradient-card">
                {countryFacts.map((country) => {
                    const {id,country_name,capital,population,interesting_fact} = country

                    return (
                        <div className="card" key={id}>
                            <p className="card-title">{country_name}</p>
                            <p><span className="card-desc">Capital: </span>{capital}</p>
                            <p><span className="card-desc">Population: </span>{population}</p>
                            <p><span className="card-desc">Interesting Fact: </span>{interesting_fact}</p>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}