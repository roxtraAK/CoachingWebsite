import axios from "axios";

export interface IPersonalTraining {
  date: string;
  time: string;
}

export default async function PersonalTrainingApi(dateTime: IPersonalTraining) {
  const { date, time } = dateTime;

  const dateTimeString: string = `${date} ${time}`;

  if (dateTimeString === undefined) {
    console.error("Please book a Personal Training");
    return;
  }

  axios
    .post("http://localhost:3000/personaltraining", {
      bookedDate: dateTimeString,
    })
    .then((response) => {
      console.log("personal training booked", response.data);
    })
    .catch((error) => {
      console.log("Error booking personal training", error.response.data);
    });
}
