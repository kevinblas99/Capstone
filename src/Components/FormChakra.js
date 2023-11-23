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
  Heading,Container
} from "@chakra-ui/react";
import * as Yup from 'yup';
import {useState} from "react";
import {useNavigate} from 'react-router-dom';

         export default function FormChakra(props) {

          const navigate = useNavigate();
  const [date, setDate] = useState('');
  const formik = useFormik({
    initialValues: {
      first: "",
      last: "",
      email: "",
      time: "17:00",
      ocassion: "birthday",
      guests: "",
      date: "",
    },
    validationSchema: Yup.object({
      first: Yup.string().required("Required"),
      last: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      guests: Yup.number().
        min(1, "Must be more than nobody").
        max(16, "Must be less then 16 guests").
        required("Required"),
      date: Yup.date().required("Required"),
    }),
    onSubmit: async (values,actions) => {
      console.log (values);
      console.log (actions);
      await new Promise ((resolve) => setTimeout(resolve, 1000));
      navigate("/confirmation", { state: { data: values} });

    }
  });

  const [realTime, setRealTime] = useState(
    props.availableTimes.map((times) => <option> {times} </option>)
  );


  function handleDateChange(e) {
    setDate(e.target.value);


    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);
    setRealTime(props.availableTimes.map((times) => <option>{times}</option>));
  }


  return (
    <VStack maxWidth="1200px" p={0} alignItems="center">
      <Heading as="h1" fontSize="lg" fontFamily="Markazi-text" my={10} id="contactme-section">
        Reserve your table
      </Heading>
      <Container p={5} rounded="xl" backgroundColor="#EDEFEE">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={2}>
            <FormControl isInvalid={formik.errors.date && formik.touched.date}>
              <FormLabel htmlFor="date">Choose Date</FormLabel>
              <Input
                border="solid #495E57"
                name="date"
                type="date"
                value={date}
                onChange={handleDateChange}
                {...formik.getFieldProps("date")} />
            </FormControl>
            <FormControl isInvalid={formik.errors.time && formik.touched.time}>
              <FormLabel htmlFor="time">Choose time</FormLabel>
              <Select
                border="solid #495E57"
                name="time"
                value={formik.values.time}
                onChange={formik.handleChange}
                {...formik.getFieldProps("time")}>
                {realTime}
              </Select>
              <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.guests && formik.touched.guests}>
              <FormLabel htmlFor="guests">Number of Guests (Between 1 & 16)</FormLabel>
              <NumberInput
                name="guests"
                min={1} max={16}
                defaultValue={1}
                onChange={formik.handleChange}
                {...formik.getFieldProps("guests")}
              >
                <NumberInputField
                  border="solid #495E57"
                  value={formik.values.guests}
                  onChange={formik.handleChange}
                  {...formik.getFieldProps("guests")} />
              </NumberInput>
              <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="ocassion">Ocassion</FormLabel>
              <Select
                border="solid #495E57"
                name="ocassion"
                value={formik.values.ocassion}
                onChange={formik.handleChange}
              >
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="other">Other</option>
              </Select>
            </FormControl>
            <FormControl isInvalid={formik.errors.first && formik.touched.first}>
              <FormLabel htmlFor="first">First Name</FormLabel>
              <Input
                border="solid #495E57"
                name="first"
                value={formik.values.first}
                onChange={formik.handleChange}
                {...formik.getFieldProps("first")} />
              <FormErrorMessage>{formik.errors.first}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.last && formik.touched.last}>
              <FormLabel htmlFor="last">Last Name</FormLabel>
              <Input
                border="solid #495E57"
                name="last"
                value={formik.values.last}
                onChange={formik.handleChange}
                {...formik.getFieldProps("last")} />
              <FormErrorMessage>{formik.errors.last}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.email && formik.touched.email}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                border="solid #495E57"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                {...formik.getFieldProps("email")} />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              width="min(50vw, 210px)"
              height="40px"
              backgroundColor="#F4CE14"
              textColor="black"
              fontWeight="bolder"
              borderRadius="16px"
              borderStyle="solid"
              cursor="pointer"
              disabled={formik.isSubmitting}
            >Reserve
            </Button>
          </VStack>
        </form>
      </Container>
    </VStack>
  );
}