import BookingForm from "../Components/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../API/bookingAPI";
import "../Styles/BookingPage.css";
import FormChakra from "../Components/FormChakra";
import Alert from "../Hooks/Alert";



export default function BookingPage() {
    function updateTimes(date) {
        return fetchAPI(date);
    }
    const output = fetchAPI(new Date());

    const [availableTimes,dispatch] = useReducer (updateTimes, output);

    return(
        <>
        <FormChakra availableTimes={availableTimes} updateTimes={dispatch} />
        </>
    );
};
