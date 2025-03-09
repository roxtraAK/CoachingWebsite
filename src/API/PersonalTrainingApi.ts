import axios from "axios";

export interface IPersonalTraining {
  date: string | null;
  time: string;
}

export type User = {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
};

export async function BookPersonalTraining(
  dateTime: IPersonalTraining,
  user: User,
  product: string
): Promise<number | null> {
  const { date, time } = dateTime;
  const { firstname, lastname, email, phonenumber } = user;

  const bookedDate: string = `${date} ${time}`;

  if (!bookedDate) {
    console.error("Please book a Personal Training");
    return null;
  }

  if (!firstname || !lastname || !email || !phonenumber) {
    console.error("Please enter all user information");
    return null;
  }

  try {
    const response = await axios.post(
      "http://localhost:3000/personaltraining",
      {
        bookedDate: bookedDate,
        firstname: firstname,
        lastname: lastname,
        email: email,
        phonenumber: phonenumber,
        product: product,
      }
    );

    console.log("Personal training booked", response.data);
    return response.status;
  } catch (error: any) {
    if (error.response) {
      console.error("Error booking personal training", error.response.data);
      return error.response.status;
    } else {
      console.error("Error booking personal training", error.message);
      return null;
    }
  }
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
