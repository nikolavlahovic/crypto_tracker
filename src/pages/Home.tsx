import { useEffect, useState } from "react";
import Table from "../components/Table";
import TableCell from "../components/TableCell";
type Currencies = {
  btcusd: number[];
  ltcusd: number[];
  ltcbtc: number[];
  ethusd: number[];
  ethbtc: number[];
};
function Home() {
  const [data, setData] = useState<Currencies | null>({
    btcusd: [0],
    ltcusd: [0],
    ltcbtc: [0],
    ethusd: [0],
    ethbtc: [0],
  });

  const [topCurrencies, setTopCurrencies] = useState([
    "BTCUSD",
    "LTCUSD",
    "LTCBTC",
    "ETHUSD",
    "ETHBTC",
  ]);

  useEffect(() => {
    const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
    ws.addEventListener("open", () => {
      let msg = JSON.stringify({
        event: "subscribe",
        channel: "ticker",
        pair: "BTCUSD",
      });
      ws.send(msg);
    });

    ws.addEventListener("message", (event) => {
      if (JSON.parse(event.data)[1] !== "hb") {
        setData(JSON.parse(event.data)[1]);
        console.log(JSON.parse(event.data)[1]);
      }
    });
  }, [topCurrencies]);
  const headers = [
    { name: "name", className: "header" },
    { name: "Last", className: "header right-cell" },
    { name: "Change", className: "header right-cell" },
    { name: "Change percent", className: "header right-cell" },
    { name: "High", className: "header right-cell" },
    { name: "Low", className: "header right-cell" },
  ];
  const formatData = (data: number, symbol?: string) => {
    if (symbol) return JSON.stringify(data) + symbol;
    return data;
  };
  if (data) {
    return (
      <Table
        headers={headers.map((header) => {
          return (
            <TableCell className={header.className}>{header.name}</TableCell>
          );
        })}
      >
        <tr>
          <td>BTCUSD</td>
          <TableCell className="right-cell">
            {formatData(data.btcusd[6])}
          </TableCell>
          <TableCell className="right-cell">
            {formatData(data.btcusd[4])}
          </TableCell>
          <TableCell className="right-cell">
            {formatData(data.btcusd[5], "%")}
          </TableCell>
          <TableCell className="right-cell">
            {formatData(data.btcusd[8])}
          </TableCell>
          <TableCell className="right-cell">
            {formatData(data.btcusd[9])}
          </TableCell>
        </tr>
      </Table>
    );
  } else {
    return <p>problem</p>;
  }
}

export default Home;
