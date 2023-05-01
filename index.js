import { NseIndia } from "stock-nse-india";
import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
const nseIndia = new NseIndia();
app.use(
  cors({
    origin: "http://localhost:5173",
    origin: "https://pnltracker.netlify.app",
  })
);

app.get("/allsymbols", (req, res) => {
  // To get equity details for specific symbol
  nseIndia.getAllStockSymbols().then((symbols) => {
    res.send(symbols);
  });
});

app.get(`/details/:symbol`, (req, res) => {
    const symbol = req.params.symbol;
    nseIndia.getEquityDetails(symbol).then((details) => {
      res.send(details);
    }).catch((error) => {
      res.status(500).send(error.message);
    });
  });
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
