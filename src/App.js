import React, { useState, useEffect } from 'react';
import './App.css';
// import { useParams } from 'react-router-dom';

function App() {
  // id can be captured by using useParams() hook object destructuring
  // const { id } = useParams();

  // with 'http://localhoat/Proposals/reczYWjkWR3z9t5mY?api_key=keypBba27XUclxBwj' as url, the following id will be captured;

  const id = 'reczYWjkWR3z9t5mY';

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.airtable.com/v0/appxOuGZvte0xuK2S/Proposals/${id}?api_key=keypBba27XUclxBwj`);
      const json = await response.json();
      setData(json);
    };

    fetchData()
      // catch any error
      .catch(console.error);
  }, [id]);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Description</th>
            <th>Proposal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data?.fields?.Client_Name}</td>
            <td>{data?.fields?.Description}</td>
            <td>{data?.fields?.Name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
