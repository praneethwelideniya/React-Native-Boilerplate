import axios from 'axios'

/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */
const userApiClient = axios.create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: 'https://opentdb.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function getQuestions(category) {
  var cat=''
  if(category!==0){
    cat = 'category='+category+'&'
  }
  return userApiClient.get('/api.php?amount=10&'+cat+'type=multiple')
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    console.log(error);
    return {results:'error',error:error}
  });
}

export const questionService = {
  getQuestions,
}
