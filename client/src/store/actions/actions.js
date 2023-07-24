// actions.js
export const SET_ENDPOINTS = 'SET_ENDPOINTS';

export const setEndpoints = () => {
//   return {
//     type: SET_ENDPOINTS,
//     payload: endpoints,
//   };
return (dispatch) => {
    // Realizar la solicitud a la API para obtener los endpoints
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=:test')
      .then((response) => response.json())
      .then((data) => {
        // Dispatchear la acción con los datos obtenidos
        dispatch({
          type: SET_ENDPOINTS,
          payload: data.results,
        });
        console.log(data)
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  };

};