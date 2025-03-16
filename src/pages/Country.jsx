import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { CountryCard } from "../components/layout/CountryCard"
import { SearchFilter } from "../components/layout/SearchFilter"

export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("all");


    useEffect(() => {

        startTransition(async () => {
            const res = await getCountryData();
            //  console.log(res);
            setCountries(res.data);
        })
    }, []);

    if (isPending) {
        return (
            <div className="wrapper">
                <div className="loader"></div>
            </div>
        )

    }

    // console.log(search, filter)

    const SearchCountry = (country) => {
        {
            if (search) {
                return country.name.common.toLowerCase().includes(search.toLowerCase())
            } else {
                return country;
            }
        }

    }

    const FilterRegion = (country) => {;
        return filter === "all" || country.region.toLowerCase() === filter.toLowerCase();
    };


    // here is the main logic of search and filter 
    const filterCountry = countries.filter((country) => SearchCountry(country) && FilterRegion(country));



    return (
        <section className="country-section container">

            <SearchFilter search={search} setSearch={setSearch}
                filter={filter} setFilter={setFilter} />

            <ul className="countries-card four-col">
                {
                    filterCountry.map((currentCountry, index) => {
                        return (
                            <CountryCard country={currentCountry} key={index} />
                        )
                    })
                }
            </ul>

        </section>
    )
}