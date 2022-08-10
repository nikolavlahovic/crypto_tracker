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
  const [data, setData] = useState<Currencies>({
    btcusd: [0],
    ltcusd: [0],
    ltcbtc: [0],
    ethusd: [0],
    ethbtc: [0],
  });
  const [topCurrencies] = useState([
    "BTCUSD",
    "LTCUSD",
    "LTCBTC",
    "ETHUSD",
    "ETHBTC",
  ]);
  useEffect(() => {
    const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
    topCurrencies.forEach((symbol) => {
      ws.addEventListener("open", () => {
        let msg = JSON.stringify({
          event: "subscribe",
          channel: "ticker",
          pair: symbol.toUpperCase(),
        });
        ws.send(msg);
      });
      ws.addEventListener("message", (event) => {
        if (JSON.parse(event.data)[1] !== "hb") {
          setData((prevData) => ({
            ...prevData,
            [symbol.toLowerCase()]: JSON.parse(event.data)[1],
          }));
        }
      });
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
  return data.btcusd ? (
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
      <tr>
        <td>ltcusd</td>
        <TableCell className="right-cell">
          {formatData(data.ltcusd[6])}
        </TableCell>
        <TableCell className="right-cell">
          {formatData(data.ltcusd[4])}
        </TableCell>
        <TableCell className="right-cell">
          {formatData(data.ltcusd[5], "%")}
        </TableCell>
        <TableCell className="right-cell">
          {formatData(data.ltcusd[8])}
        </TableCell>
        <TableCell className="right-cell">
          {formatData(data.ltcusd[9])}
        </TableCell>
      </tr>
    </Table>
  ) : (
    <Table
      headers={headers.map((header) => {
        return (
          <TableCell className={header.className}>{header.name}</TableCell>
        );
      })}
    >
      <tr>
        <td>BTCUSD</td>
      </tr>
    </Table>
  );
}

export default Home;
