import axios from "axios";

export interface IPersonalTraining {
  date: string;
}

export default async function PersonalTrainingApi(
  bookedDate: IPersonalTraining
) {
  const { date } = bookedDate;

  if (date === undefined) {
    console.error("Please book a Personal Training");
    return;
  }

  axios
    .post("http://localhost:3000/personaltraining", {
      bookedDate: date,
    })
    .then((response) => {
      console.log("personal training booked", response.data);
    })
    .catch((error) => {
      console.log("Error booking personal training", error.response.data);
    });
}
