// actions.js
export const SET_ENDPOINTS = 'SET_ENDPOINTS';
export const BREADCRUMB = 'BREADCRUMB';
export const BREADCRUMB_DETAILS = 'BREADCRUMB_DETAILS';

export const GET_ITEN_DETAILS = 'GET_ITEN_DETAILS';
export const SET_CLEAR_PROVIDER = 'SET_CLEAR_PROVIDER';

export const setEndpoints = (searchValue ) => {

return (dispatch) => {
    // Realizar la solicitud a la API para obtener los endpoints
    fetch('http://localhost:3100/api/search?query='+searchValue)
        // fetch('http://localhost:8081/search?nameParam='+searchValue)
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
  
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  };

};


export const GetItenIddetails = (idDetails ) => {

  return (dispatch) => {
      // Realizar la solicitud a la API para obtener los endpoints
      fetch('http://localhost:3100/api/items?id='+idDetails)
        .then((response) => response.json())
        .then((data) => {              
            console.log("detail", data.item.attributes);
              dispatch({
                type: GET_ITEN_DETAILS,
                payload: data,
              });
              dispatch({
                type: BREADCRUMB_DETAILS,
                payload:  data.item.attributes,
              });
             
          
        })
        .catch((error) => {
          console.error('Error al obtener los datos:', error);
        });
    };
  
  };

  export const ClearProvider = () => {


    return (dispatch) => {

      dispatch({
        type: SET_CLEAR_PROVIDER,
        payload: "",
      });

    }
  }