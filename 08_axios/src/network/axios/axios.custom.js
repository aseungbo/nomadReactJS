import { instance } from "./axios.instance";

export const loginApi  = {
    // axios으로 로그인 요청 (post)
    // email : eve.holt@reqres.in
    // password : cityslicka
    loginUser: async function (email, password) {
        try {
          const res = await instance.post('login', {email: email, password: password});
           return res;
        } catch (err) {
           console.log(err);
        }
    },
};