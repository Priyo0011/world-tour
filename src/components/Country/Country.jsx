import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3}= country;

    const [visited, SetVisited] = useState(false);
    const handleVisited = () =>{
        SetVisited(!visited);
    }
    
    return (
        <div className='country'>
            <h3>{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
             <p><small>Code: {cca3}</small></p>
             <button onClick={() =>handleVisitedCountry(country)}>Mark Visited</button>
             <button onClick={() =>handleVisitedFlags(country.flags.png)}>Add Flag</button>
             <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
        </div>
    );
};

export default Country;