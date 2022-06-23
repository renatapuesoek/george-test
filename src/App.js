import React, { useState } from 'react';
import { getCurrencyApi } from './FetchApi';

const App = () => {
  const [fetchedData, setFetchedData] = React.useState([]);
  const [allCurrency, setAllCurrency] = React.useState([]);

  React.useEffect(() => {
    getCurrencyApi().then(({ fx }) => {
      setFetchedData(fx);
      setAllCurrency(fx.map((fx) => fx.currency));
    }).catch(error => console.log(error.message));   
  }, []);

  return (
    <div> 
      {fetchedData.map((item) => {
        return (
          <div className="app-container">
          <table>
              <tbody>
                <tr>
                  <td>{item.flags}</td>
                  <td>{item.currency}</td>
                  <td>EUR</td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      })}
    </div>
  );
};
//<pre>{JSON.stringify(fetchedData, null, 2)}</pre>
export default App;
