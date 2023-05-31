import axios from 'axios';

export default async (setExercises, bodyPart) => {

    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
      headers: {
        'X-RapidAPI-Key': 'c7d76f028amsh866edfc2a6eec90p1c3382jsnbe5eb8052945',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        if(response.data.length>0){
          console.log('fetching by category');
          setExercises(response.data)
        }else{
          console.log('no data')
        }
    } catch (error) {
        console.error(error);
    }

}