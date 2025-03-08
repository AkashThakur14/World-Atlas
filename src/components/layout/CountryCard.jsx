export const CountryCard = ({ country }) => {
    const { flags, name, capital, region, population } = country;
    
    return (
      <li className="country-card">
        <div className="card-container">
          <img src={flags.png} alt={name.common} className="country-flag" />
          <h2 className="country-name">{name.common}</h2>
          <p className="country-info">Capital: {capital}</p>
          <p className="country-info">Region: {region}</p>
          <p className="country-info">Population: {population.toLocaleString()}</p>
        </div>
      </li>
    );
  };
  