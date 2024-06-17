import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../store/slices/counterSlice";

export default function CounterButton() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "3vh" }}>
      <Button
        sx={{ mr: "1vw" }}
        onClick={() => dispatch(increment())}
        color="success"
        variant="contained"
      >
        Increment
      </Button>
      <Button
        sx={{ mr: "1vw" }}
        onClick={() => dispatch(decrement())}
        color="error"
        variant="contained"
      >
        Decrement
      </Button>
      <h1 style={{ color: "green" }}>Counter: {count}</h1>
    </Box>
  );
}
