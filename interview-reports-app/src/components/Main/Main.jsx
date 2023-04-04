import React from 'react';
import { Card } from '../Card/Card';
import { Search } from '../Search/Search';
import { useState , useEffect } from 'react';

export const Main = () => {

  const [candidates, setCandidates] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then((response) => response.json())
      .then((users) => setCandidates(users));
  }, []);

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };

  const filterCandidates = candidates.filter((candidate) => {
    return candidate.name.toLocaleLowerCase().includes(searchField);
  });
  return (
    <div>
    <main>
        
    <Search 
      className='candidates-search-box'
      onChangeHandler={onSearchChange}
      placeholder='Search ... '
      />
      <Card candidates={filterCandidates} />
        
    </main>
</div>
  )
}
