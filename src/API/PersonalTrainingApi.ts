import axios from "axios";

export interface IPersonalTraining {
  date: string;
  time: string;
}

export async function BookPersonalTraining(dateTime: IPersonalTraining) {
  const { date, time } = dateTime;

  const bookedDate: string = `${date} ${time}`;

  if (bookedDate === undefined) {
    console.error("Please book a Personal Training");
    return;
  }

  axios
    .post("http://localhost:3000/personaltraining", {
      bookedDate: bookedDate,
    })
    .then((response) => {
      console.log("personal training booked", response.data);
    })
    .catch((error) => {
      console.log("Error booking personal training", error.response.data);
    });
}

export async function GetBookedPersonalTraining(date: Date): Promise<Date[]> {
  try {
    const response = await axios.get("http://localhost:3000/personaltraining", {
      params: {
        date: date.toISOString(),
      },
    });

    console.log("Personal training booked", response.data);

    return response.data.map((d: string) => new Date(d));
  } catch (error) {
    console.error("Error fetching booked personal training", error);
    return [];
  }
}
