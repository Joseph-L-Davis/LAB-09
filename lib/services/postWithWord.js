import User from '../models/User';
import { getWord } from '../utils/getWord';

export default class postWithWord {
  static async create({ name, email }){
    const user = await User.insert({ name, email });

    const word = getWord();

    return {
      ...user,
      word
    };
  }
}
