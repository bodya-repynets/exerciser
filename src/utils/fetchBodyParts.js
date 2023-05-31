import axios from "axios";

export default async (setCategories) => {
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'X-RapidAPI-Key': 'c7d76f028amsh866edfc2a6eec90p1c3382jsnbe5eb8052945',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log('fetching categories');
          localStorage.setItem("categories", JSON.stringify(response.data));
          setCategories(response.data);
      } catch (error) {
          console.error(error);
      }
  }

