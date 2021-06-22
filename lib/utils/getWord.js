import dotenv from 'dotenv';
import fetch from 'node-fetch';
dotenv.config();

export const getWord = async (req, res) => {
  try {
    const res = await fetch('https://wordsapiv1.p.rapidapi.com/words/?random=true',
      {
        method: 'get',
        headers:{ 'x-rapidapi-key': process.env.WORDS_KEY }
      })
      .then(res => res.json());
    return res.word;
  } catch(err) {
    return;
  }
};
