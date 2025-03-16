import React, { useTransition, useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getCountryIndivdualData } from '../../api/postApi'

export const CountryDetails = () => {
    const params = useParams();

    const [isPending, startTransition] = useTransition();
    const [country, setCountryind] = useState();


    useEffect(() => {

        startTransition(async () => {
            const res = await getCountryIndivdualData(params.id);
            console.log(res);
            if (res.status === 200) {
                setCountryind(res.data[0]);
            }

        })
    }, []);

    if (isPending) {
        return (

            <div className="wrapper">
                <div className="loader"></div>
            </div>
        )
    }

    console.log(params);

    return (
        <div>
            <section className="indcountry-section container">
                <div className="indcountry-card">
                    <div className='left-col'>
                        <img src={country?.flags?.png} alt={country?.name?.common} className="country-flag" />
                    </div>
                    <div className='right-col'>
                        <h2 className="country-name">{country?.name?.common}</h2>
                        <p className="country-info">Capital: {country?.capital?.[0]}</p>
                        <p className="country-info">Region: {country?.region}</p>
                        <p className="country-info">
                            Population: {country?.population?.toLocaleString()}
                        </p>
                    </div>
                </div>
            </section>
            <div className='back-btn'>
                <NavLink to="/country"><button>Go back</button></NavLink>
            </div>
        </div>
    )
}
