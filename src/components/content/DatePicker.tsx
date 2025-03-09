import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { format } from "date-fns";
import "../../styles/datepicker.css";
import { GetBookedPersonalTraining } from "../../API/PersonalTrainingApi";

type FreeTimePickerProps = {
  onSelect: (dateTime: string) => void;
};

export default function FreeTimePicker({ onSelect }: FreeTimePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    undefined
  );
  const [freeTimes, setFreeTimes] = useState<string[]>([]);
  const [bookedTimes, setBookedTimes] = useState<string[]>([]);

  const allTimes: string[] = ["09:00", "11:00", "14:00", "16:00", "18:00"];

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setSelectedTime(undefined);
  };

  useEffect(() => {
    const fetchBookedTimes = async () => {
      if (selectedDate) {
        try {
          const bookedDates = await GetBookedPersonalTraining(selectedDate);
          const bookedTimesFormatted = bookedDates.map((date) =>
            format(new Date(date), "HH:mm")
          );
          setBookedTimes(bookedTimesFormatted);
          setFreeTimes(allTimes);
        } catch (error) {
          console.error("Fehler beim Abrufen der gebuchten Zeiten:", error);
        }
      } else {
        setFreeTimes([]);
      }
    };

    fetchBookedTimes();
  }, [selectedDate]);

  // Formatierung der ausgewählten Zeit und Datum für die API
  const getFormattedDateTime = (
    date: Date | null,
    time: string | undefined
  ): string | null => {
    if (!date || !time) return null;

    // Formatierung des Datums im 'yyyy-MM-dd' Format
    const dateString = format(date, "yyyy-MM-dd");

    // Kombiniere Datum und Zeit im 'yyyy-MM-dd HH:mm:ss' Format
    return `${dateString} ${time}:00`; // Zeit ergänzt mit Sekunden
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", color: "white" }}>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
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
                    onClick={() => {
                      setSelectedTime(time);

                      const bookedDateTime = getFormattedDateTime(
                        selectedDate,
                        time
                      );

                      if (bookedDateTime) {
                        onSelect(bookedDateTime);
                      }
                    }}
                    variant="contained"
                    disabled={bookedTimes.includes(time)}
                    aria-selected={selectedTime === time}
                    sx={{
                      backgroundColor:
                        selectedTime === time ? "green" : "info.main",
                      color: "white",
                      "&:hover": {
                        backgroundColor:
                          selectedTime === time ? "darkgreen" : "info.dark",
                      },
                      "&.Mui-disabled": {
                        color: "white !important",
                        backgroundColor: "grey.500 !important",
                      },
                    }}
                  >
                    {time}
                  </Button>
                </ListItem>
              ))
            ) : (
              <Typography>Leider keine freien Zeiten verfügbar.</Typography>
            )}
          </List>
        </Box>
      )}
    </Box>
  );
}
