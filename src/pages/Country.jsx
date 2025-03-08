import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import {CountryCard} from "../components/layout/CountryCard"

export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);


    useEffect(() => {

        startTransition(async () => {
            const res = await getCountryData();
            //  console.log(res);
            setCountries(res.data);
        })
    }, []);



    if (isPending) {
        return (
            <div className="loader"></div>
        )
    }


    return (
        <section className="country-section container">
            

                <ul className="countries-card four-col">
                    {
                        countries.map((currentCountry,index) => {
                            return(
                                <CountryCard country = {currentCountry} key={index} />
                        )

                        })
                    }
                </ul>

        </section>

    )
}