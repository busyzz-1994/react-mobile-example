import { atom } from 'recoil';
interface UserState {
  name: string;
  age: number;
}
export const userState = atom<UserState>({
  key: 'userState',
  default: {
    name: '',
    age: null,
  },
});
