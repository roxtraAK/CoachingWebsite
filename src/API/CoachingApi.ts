import axios from "axios";

export interface ICoachingUser {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
}

export default async function CoachingApi(user: ICoachingUser) {
  const { firstname, lastname, email, phonenumber } = user;

  if (
    firstname === "" ||
    lastname === "" ||
    email === "" ||
    phonenumber === ""
  ) {
    console.error("Please fill out all fields");
    return;
  }

  if (!phonenumber.startsWith("+")) {
    console.error("Please enter a valid phone number");
    return;
  }

  axios
    .post("http://localhost:3000/coaching", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phonenumber: phonenumber,
    })
    .then((response) => {
      console.log("User added", response.data);
    })
    .catch((error) => {
      console.log("Error adding new user", error.response.data);
    });
}
