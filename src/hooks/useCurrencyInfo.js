import { useState } from "react";
import { useEffect } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    const fetchCurrencyData = async () => {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-09-04/v1/currencies/${currency}.json`
        );
        const result = await res.json();
        console.log(result);
        setData(result[currency]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrencyData();
  }, [currency]);
  return data;
};

export default useCurrencyInfo;
