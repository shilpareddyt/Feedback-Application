import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

  export function submitAnswers(questions) {
    axios.post(baseURL, questions)
      .then((response) => {
        alert('submitted to mock api');
      })
      .catch((err) => {
        alert('Error Message',err?.message)
    });
      ;
  }
 