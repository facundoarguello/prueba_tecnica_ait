
import { useEffect } from "react";

const API_URL = 'http://localhost:9000/api';

const getSuspender = (promise) => {
    let status = "pending";
    let response;
  
    const suspender = promise.then(
      (res) => {
        status = "success";
        response = res;
      },
      (err) => {
        status = "error";
        response = err;
      }
    );
  
    const read = () => {
      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw response;
        default:
          return response;
      }
    };
  
    return { read };
  };
  
  export function fetchData(path, method, body, params) {
    let url = `${API_URL}/${path}/`;
    if (params) {
        url = url + params;
    }
    console.log(url)
    const promise = fetch(
        url,
        {
            method: method,
            headers: {
              'Content-Type': 'application/json', // Puedes ajustar los encabezados según sea necesario
            },
            body: body ? JSON.stringify(body) : null,
            data: body ? body : null
        },
        
        )
      .then((response) => response.json())
      .then((json) => json);
  
    return getSuspender(promise);
  }

export function useFetch(path, limit, offset, setData, SetTotalItems) {
  
  useEffect(() => {
    fetch(`${API_URL}/${path}/?limit=${limit}&offset=${offset}`)
      .then(response => response.json())
      .then(data =>{
        setData(data.data);
        SetTotalItems(data.total_items);
      } )
      .catch(error => console.error(error));
  }, [limit, offset]);
   

}