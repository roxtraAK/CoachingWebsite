import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { format } from "date-fns";
import "../../styles/datepicker.css";
import PersonalTrainingApi from "../../API/PersonalTrainingApi";

const FreeTimePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [freeTimes, setFreeTimes] = useState<string[]>([]);
  const date = new Date();

  const allTimes: string[] = ["09:00", "11:00", "14:00", "16:00", "18:00"];

  const bookedTimes: string[] = [];

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const availableTimes = allTimes.filter(
        (time) => !bookedTimes.includes(time)
      );
      setFreeTimes(availableTimes);
    } else {
      setFreeTimes([]);
    }
  };

  useEffect(() => {
    if (selectedDate) {
      const availableTimes = allTimes.filter(
        (time) => !bookedTimes.includes(time)
      );
      setFreeTimes(availableTimes);
    }
  }, [selectedDate]);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", color: "white" }}>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd.MM.yyyy"
          inline
          calendarClassName="custom-calendar"
        />
      </Box>

      {selectedDate && (
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            fontFamily={"favela"}
            sx={{ maxWidth: "35vw" }}
          >
            Verfügbare Zeiten am {format(selectedDate, "dd.MM.yyyy")}:
          </Typography>
          <List sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {freeTimes.length > 0 ? (
              freeTimes.map((time, index) => (
                <ListItem
                  key={index}
                  sx={{
                    flex: "1 0 30%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    fullWidth
                    onClick={() =>
                      PersonalTrainingApi({
                        date: format(selectedDate, "dd.MM.yyyy"),
                        time,
                      })
                    }
                    key={index}
                    variant="contained"
                    color="info"
                  >
                    {time}
                  </Button>
                </ListItem>
              ))
            ) : (
              <p>Leider keine freien Zeiten verfügbar.</p>
            )}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default FreeTimePicker;
