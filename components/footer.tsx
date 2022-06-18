import { useState, useEffect } from 'react';
import { Cryptocurrency } from '../models/Cryptcurrency'

export default function Footer() {
    const [count, setCount] = useState(0);
    const [crypts, setCrypts] = useState<Cryptocurrency[]>([]);

    var array = [
      {
      "id": 5426,
      "slug": "solana",
      "name": "Solana",
      "symbol": "SOL",
      "jpy": 4083.0337971780245,
      "usd": 30.24637514806663,
      "dtLastUpdated": "2022-06-18T11:47:00.000Z"
      },
      {
      "id": 16352,
      "slug": "green-satoshi-token",
      "name": "Green Satoshi Token (SOL)",
      "symbol": "GST",
      "jpy": 31.612645873589393,
      "usd": 0.2341807572536915,
      "dtLastUpdated": "2022-06-18T11:47:00.000Z"
      },
      {
      "id": 1839,
      "slug": "bnb",
      "name": "BNB",
      "symbol": "BNB",
      "jpy": 27535.4961977997,
      "usd": 203.97797061156655,
      "dtLastUpdated": "2022-06-18T11:48:00.000Z"
      },
      {
      "id": 20236,
      "slug": "green-satoshi-token-bsc",
      "name": "Green Satoshi Token (BSC)",
      "symbol": "GST",
      "jpy": 44.268858588599045,
      "usd": 0.327935689675874,
      "dtLastUpdated": "2022-06-18T11:48:00.000Z"
      },
      {
      "id": 18069,
      "slug": "green-metaverse-token",
      "name": "STEPN",
      "symbol": "GMT",
      "jpy": 77.52521173067161,
      "usd": 0.5742927327860546,
      "dtLastUpdated": "2022-06-18T11:48:00.000Z"
      },
      {
      "id": 1,
      "slug": "bitcoin",
      "name": "Bitcoin",
      "symbol": "BTC",
      "jpy": 212557.762321872,
      "usd": 19353.35490727398,
      "dtLastUpdated": "2022-06-18T11:49:00.000Z"
      },
      {
      "id": 3408,
      "slug": "usd-coin",
      "name": "USD Coin",
      "symbol": "USDC",
      "jpy": 135.0464530316707,
      "usd": 1.00039967428993,
      "dtLastUpdated": "2022-06-18T11:47:00.000Z"
      }
    ];



    useEffect(() => {
      // async function getCryptocurrency() {
      //   var response = await fetch(
      //     `https://script.google.com/macros/s/AKfycbyuH0oH0CpcJhL5F0-iVBnLh6IgnXZ-zbIZ3KMPVcSdvO_9uJ4xXMI1nYWkhopg9MHS/exec`,
      //     `https://script.google.com/macros/s/AKfycbwncGtdfjy-sBNUSsdJ0u1nZH6rAag9e2KfmPncjKpUhqUUH5tonC-wryiFjlQ8PqenKg/exec`,
      //   )
      //   return response.json();
      // }

      // getCryptocurrency().then(response => {
      //   var array = [];
      //   for (var item in response){
      //     array.push(response[item]);
      //   };
      //   console.log(array);
      //   setCrypts(array);
      // });

      setCrypts(array);
    }, [count]);

    return (
      <div>
      <table>
        <tr>
          <th>ID</th>
          <th>SLUG</th>
          <th>name</th>
          <th>symbol</th>
          <th>jpy</th>
          <th>usd</th>
          <th>dtLastUpdated</th>
        </tr>
        {crypts.map((crypt) => {
          return(
        <tr key={crypt.id}>
          <td>{crypt.id}</td>
          <td>{crypt.slug}</td>
          <td>{crypt.name}</td>
          <td>{crypt.symbol}</td>
          <td>{crypt.jpy}</td>
          <td>{crypt.usd}</td>
          <td>{crypt.dtLastUpdated}</td>
        </tr>
          );
        })}
      </table>
        <p>{count}</p>
        <div>
          <button onClick={() => setCount(count + 1)}>Count+</button>
        </div>
        <p>Footerコンポーネント</p>
      </div>
    );
  }