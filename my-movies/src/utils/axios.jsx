import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzgwNzEyYjc2MjgzOWQ2YjdmZTE4NzNjYTIwZmFiOSIsIm5iZiI6MTcyMTY1NzIwOC45NDYwMTIsInN1YiI6IjY2OWU2NTJhOGFkNDM5NDQ5YTZlNTUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wNSBj5elak_sQZaKzJb5iBjhxa5DdSM7zz3SzRMcKuM'
      }
})

export default instance;