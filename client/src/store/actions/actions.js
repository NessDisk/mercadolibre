// actions.js
export const SET_ENDPOINTS = 'SET_ENDPOINTS';
export const BREADCRUMB = 'BREADCRUMB';
export const BREADCRUMB_DETAILS = 'BREADCRUMB_DETAILS';

export const GET_ITEN_DETAILS = 'GET_ITEN_DETAILS';

export const setEndpoints = (searchValue ) => {

return (dispatch) => {
    // Realizar la solicitud a la API para obtener los endpoints
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=:'+searchValue)
      .then((response) => response.json())
      .then((data) => {
        // Dispatchear la acción con los datos obtenidos
        dispatch({
          type: SET_ENDPOINTS,
          payload: data.results,
        });
        dispatch({
          type: BREADCRUMB,
          payload: data.available_filters,
        });
        console.log( data.available_filters)
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  };

};


export const GetItenIddetails = (idDetails ) => {

  return (dispatch) => {
      // Realizar la solicitud a la API para obtener los endpoints
      fetch('https://api.mercadolibre.com/items/'+idDetails)
        .then((response) => response.json())
        .then((data) => {
          // Dispatchear la acción con los datos obtenidos

          fetch('https://api.mercadolibre.com/items/'+idDetails+'/description')
          .then((response) => response.json())
          .then((datadescription) => {

            const finalData = {
              "author": {
              "name": "Nestor",
              "lastname": "Solera"
              },
              "item": {
              "id": data.id,
              "title": data.title,
              "price": {
              "currency": data.currency_id,
              "amount": data.price,
              "decimals": data.base_price,
              },
              "picture": data["pictures"][0]["url"],
              "condition": data["condition"],
              "free_shipping":  data["shipping"]["free_shipping"],
              "sold_quantity": data["sold_quantity"],
              "description": datadescription["plain_text"]
              }
              }
              

              dispatch({
                type: GET_ITEN_DETAILS,
                payload: finalData,
              });
              dispatch({
                type: BREADCRUMB_DETAILS,
                payload: data.attributes,
              });
              console.log("Details data",data.attributes)
            })
        })
        .catch((error) => {
          console.error('Error al obtener los datos:', error);
        });
    };
  
  };