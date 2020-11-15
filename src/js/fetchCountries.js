export default  fetchCountries;

function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then(response => {
    if (response.ok) return response.json();
        if (response.status == 404) {
            throw new Error('Not found');
            // alert('Страны с таким именем нет');
        }
  })
 };