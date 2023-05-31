import axios from "axios";

export default async (setExercises) => {

    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        headers: {
          'X-RapidAPI-Key': 'c7d76f028amsh866edfc2a6eec90p1c3382jsnbe5eb8052945',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
    
    try {
        const response = await axios.request(options);
        console.log('fetching all exercises');
        localStorage.setItem("exercises", JSON.stringify(response.data));
        setExercises(response.data);
    } catch (error) {
        console.error(error);
    }
}