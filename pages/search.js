import { useState } from 'react';
import { debounce } from 'lodash';
import Layout from '../components/Layout';
import searchUtil from '../api/search';
import SearchCard from '../components/SearchCard';

const search = () => {
  const [results, setResults] = useState([]);
  const handleSearch = (e) => {
    if (e.target.value.length < 3) {
      setResults([]);
      return;
    }
    searchUtil(e.target.value).then((res) => {
      setResults(res.articles);
    });
  };
  const debounceSearch = (...args) => {
    const debouncedEvent = debounce(...args);
    return (e) => {
      e.persist();
      return debouncedEvent(e);
    };
  };
  return (
    <Layout>
      <div className="col-start-2 col-span-10 mt-4">
        <input
          type="text"
          className="w-full border border-gray-500 text-sm p-2 rounded-sm"
          placeholder="Search for topics"
          onChange={debounceSearch(handleSearch, 500)}
        />
        {results.length > 0 && <h1 className="text-2xl font-black pt-2 pb-4">Search Results</h1>}
        {results && results.map((article) => (
          <SearchCard
            author={article.author}
            title={article.title}
            description={article.description}
            url={article.url}
            img={article.urlToImage}
            time={article.publishedAt}
            key={article.title}
          />
        ))}
      </div>
    </Layout>
  );
};

export default search;
