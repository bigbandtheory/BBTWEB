import fetch from 'isomorphic-fetch';

const defaultOptions = {
  method: "POST",
  headers: new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }),
  credentials: "same-origin"
}

function makeRequest(uri , options){
  return fetch( uri, options ).then(function(response) {
     if (response.status >= 400) {
         throw new Error("Bad response from server");
     }
     return response.json();
  });
}

function doGetRequest(uri , data , options = defaultOptions  ){

  options.body = JSON.stringify(data);
  options.method = 'GET';
  return makeRequest(uri , options);
}

function doPostRequest(uri, data, options = defaultOptions){
  options.body = JSON.stringify(data);
  options.method = 'POST';
  return makeRequest(uri , options);
}

export function initialState(){

}

export function getFeatureClients(){
  return doGetRequest('/clients/featured');
}

export function getEvents(){
  return doGetRequest('/events');
}

export function sendSubscriptionMessage(data){
  return doPostRequest('/subscribe', data);
}

export function getAllArtists(){
  return doGetRequest('/artists/all');
}

export function getArtistCarousal(){
  return doGetRequest('/artists/carousal');
}

export function getArtistById(id){
  return doGetRequest(`/artists/${id}`);
}

export function getFeaturedTracks(){
   return doGetRequest('/artists/featured/tracks');
}

export function getFeaturedArtists(){
   return doGetRequest('/artists/featured');
}
