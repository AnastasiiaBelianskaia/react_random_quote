import './App.css';
import axios from "axios";
import Card from "./components/Card";
import React, { useEffect, useState, useMemo } from "react";
import { Box } from '@mui/material';

function QuoteBox() {
  const randomNumber = () => Math.floor(Math.random() * 256);
  const color = `rgba(${randomNumber()}, ${randomNumber()}, ${randomNumber()}, 0.4)`;
  const [dependency, setDependency] = useState(0);
  const [data, setData] = useState({});

  const getQuote = useMemo(() =>  async () => {
    try {
        axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((result) => {
        const randomQuote = Math.floor(Math.random() * result.data.quotes.length);
        setData(result.data.quotes[randomQuote])
      })
    } catch(error) {
      console.error('Error:', error);
    }
  }, [dependency])

  useEffect(() => {
    getQuote();
  }, [getQuote]);

  return (
    <Box
      id="qoute-box"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={4}
      minHeight="100vh"
      boxSizing="border-box"
      bgcolor={color}
    >
      <Card
        color={color}
        quote={data.quote}
        author={data.author}
        onClick={() => setDependency(dependency + 1)}
      />
    </Box>
  )
}

export default QuoteBox;
