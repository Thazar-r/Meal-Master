import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get('/api/meals'); // Fetch all meals from the local JSON
      const filteredResults = response.data.filter(meal =>
        meal.strMeal.toLowerCase().includes(query.toLowerCase()) ||
        meal.strCategory.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes or categories"
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {results.length > 0 ? (
            results.map(meal => (
              <li key={meal.idMeal}>
                <h2>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </li>
            ))
          ) : (
            <p>No results found</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default Search;
