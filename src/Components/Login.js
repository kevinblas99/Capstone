import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    VStack,
    Heading
  } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const onSubmit = async (values,actions) => {
  console.log (values);
  console.log (actions);
  await new Promise ((resolve) => setTimeout(resolve, 1000));
  actions.resetForm()
};

const Login = (props) => {
 const formik = useFormik({
    initialValues: {
        uname:"" ,
        logpass:"" ,
    },
    validationSchema: Yup.object({
      uname:Yup.string().required("Required"),
      logpass:Yup.string().required("Required"),
  }),
    onSubmit,
})

    return(
        <VStack maxWidth="1500" p={20} alignItems="center"
        bgGradient='linear(to-b, #F4CE14, #495E57)'
        >
        <Heading as="h1" id="contactme-section" pb={5} color="#495E57">
              Good to see you again!
        </Heading>
        <Box p={6} rounded="xl" w={["sm","md","lg"]} backgroundColor="#EDEFEE">
        <form onSubmit={formik.handleSubmit}>
    <VStack spacing={4}>
      <FormControl isInvalid={  formik.errors.uname && formik.touched.uname}>
        <FormLabel htmlFor="uname" fontWeight="bolder">Username</FormLabel>
        <Input
        fontWeight="300"
        border="solid #495E57"
          id="uname"
          name="uname"
          value={formik.values.uname}
          {...formik.getFieldProps("uname")}
        />
          <FormErrorMessage>{formik.errors.uname}</FormErrorMessage>
        </FormControl>
      <FormControl isInvalid={  formik.errors.logpass && formik.touched.logpass}>
        <FormLabel htmlFor="logpass" fontWeight="bolder">Password</FormLabel>
        <Input
        border="solid #495E57"
          id="logpass"
          name="logpass"
          type="password"
          value={formik.values.logpass}
          {...formik.getFieldProps("logpass")}>

        </Input>
        <FormErrorMessage>{formik.errors.logpass}</FormErrorMessage>
      </FormControl>
      <Button
               /* onClick={() => {navigate("/confirmation")}} */
            type="submit" 
            width="min(50vw, 210px)"
            height= "40px"
            backgroundColor="#F4CE14"
            textColor="black"
            fontWeight="bolder"
            borderRadius="16px"
            borderStyle="solid"
            cursor= "pointer"
            disabled={formik.isSubmitting}
                    >Log In
            </Button>
      </VStack>
      </form>
      </Box>
      </VStack>
    );
}
export default Login;
