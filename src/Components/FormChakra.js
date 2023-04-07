import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Heading
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../Hooks/useSubmit";
import {useState} from "react";
import { useEffect } from "react";
import { useAlertContext } from "../Hooks/alertContext";
import { useNavigate } from "react-router-dom";



        const FormChakra = (props) => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [ocassion, setOcassion] = useState('Birthday');
    const [guests, setGuests] = useState('');
    const [date, setDate] = useState('');


    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();
    const formik = useFormik({
        initialValues: {
            bookdate:"" ,
            restime:"" ,
          firstName:"" ,
          lastName:"",
          email:"" ,
          guests:"",
        },
        onSubmit: (values) => {
          submit('http://localhost:3001/reservations', values);
        },

    validationSchema: Yup.object({
    firstName:Yup.string().required("Required"),
    lastName:Yup.string().required("Required"),
    email:Yup.string().email("Invalid email address").required("Required"),
    guests:Yup.number().
    integer().
    min(1, "Must be more than nobody").
    max(16,"Must be less then 16 guests").
    required("Required"),
  }),
});

useEffect (() => {
    if (response) {
      onOpen(response.type , response.message);
      if (response.type === 'success')
      {formik.resetForm();
      }
    }
  }, [response]);

 const [realTime, setRealTime] = useState(
    props.availableTimes.map((times) => <option> {times} </option>)
);

let navigate = useNavigate()

function handleDateChange(e) {
    setDate(e.target.value)


    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);
    setRealTime(props.availableTimes.map((times) => <option>{times}</option>)); }


return (
    <VStack maxWidth="1500" p={20} alignItems="center">
    <Heading as="h1" id="contactme-section">
          Reserve Your Table
    </Heading>
    <Box p={6} rounded="xl" w={["sm","md","lg","xl","2xl"]} backgroundColor="#EDEFEE">
<form onSubmit={formik.handleSubmit}>
<VStack spacing={4}>
  <FormControl isInvalid={  formik.errors.bookDate && formik.touched.bookDate}>
    <FormLabel htmlFor="book-date">Choose Date</FormLabel>
    <Input
    border="solid #495E57"
      id="book-date"
      name="book-date"
      type="date"
      value={date}
      onChange={handleDateChange}
      {...formik.getFieldProps("book-date")}
    />
    </FormControl>
  <FormControl isInvalid={  formik.errors.resTime && formik.touched.resTime}>
    <FormLabel htmlFor="res-time">Choose time</FormLabel>
    <Select
    border="solid #495E57"
      id="res-time"
      name="res-time"
      onChange={(e) => setRealTime(e.target.value)}
      {...formik.getFieldProps("res-time")}>
      {realTime}
    </Select>
    <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
  </FormControl>
  <FormControl isInvalid={formik.errors.guests && formik.touched.guests}>
    <FormLabel htmlFor="guests">Number of Guests (Between 1 & 16)</FormLabel>
    <NumberInput 
    id="guests"
    name="guests"
    min={1} max={16}
    defaultValue={1}
    onChange={(e) => setGuests(e.target.value)}
    {...formik.getFieldProps("guests")}
    >
  <NumberInputField
  border="solid #495E57"
      value={guests}
      onChange={(e) => setGuests(e.target.value)}
      {...formik.getFieldProps("guests")}/>
</NumberInput>
    <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
  </FormControl>
  <FormControl>
    <FormLabel htmlFor="ocassion">Ocassion</FormLabel>
    <Select 
    border="solid #495E57"
    id="ocassion"
     name="ocassion"
     value={ocassion}
     onChange={(e) => setOcassion(e.target.value)}  
     >
    <option value="birthday">Birthday</option>
      <option value="anniversary">Anniversary</option>
      <option value="other">Other</option>
    </Select>
  </FormControl>
  <FormControl isInvalid={  formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Input
                border="solid #495E57"
                  id="firstName"
                  name="firstName"
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                  {...formik.getFieldProps("firstName")}
                />
     <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
    </FormControl>
    <FormControl isInvalid={  formik.errors.lastName && formik.touched.lastName}>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <Input
                border="solid #495E57"
                  id="lastName"
                  name="lastName"
                  value={last}
                  onChange={(e) => setLast(e.target.value)}
                  {...formik.getFieldProps("lastName")}
                />
     <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
    </FormControl>
    <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                border="solid #495E57"
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
                <Button
                onClick={() => {navigate("/confirmation")}}
            type="submit" 
            width="min(50vw, 210px)"
            height= "40px"
            backgroundColor="#F4CE14"
            textColor="black"
            fontWeight="bolder"
            borderRadius="16px"
            borderStyle="solid"
            cursor= "pointer"
                    >Reserve
            </Button>
</VStack>
    </form>
    </Box>
    </VStack>
);
};

export default FormChakra;