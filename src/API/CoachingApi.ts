import axios from "axios";

export interface ICoachingUser {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
}

export default async function CoachingApi(user: ICoachingUser) {
  axios
    .post("http://localhost:5173/coaching", user)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
