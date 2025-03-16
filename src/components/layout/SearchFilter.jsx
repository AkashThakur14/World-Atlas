
export const SearchFilter = ({ search, setSearch, filter, setFilter }) => {

    const changeInputData = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }

    const changeFilterData = (e) =>{
        e.preventDefault();
        setFilter(e.target.value)

    }

    return (
        <div>
            <section className="container">
                <div className="search-wrapper">
                <div className="search-filter">
                    <input type="text" placeholder="search" value={search} onChange={changeInputData} />

                </div>

                <select className="select-section" value={filter} onChange={changeFilterData}>
                    <option value="all">All</option>
                    <option value="africa">Africa</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="americas">Americas</option>
                    <option value="oceania">Oceania</option>
                </select>
                </div>
            </section>

        </div>
    )
}
