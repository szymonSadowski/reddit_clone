import React from "react";
import { Form, Formik } from "formik";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useMutation } from 'urql';
import { useRegisterMutation } from "../generated/graphql";
import { responsePathAsArray } from "graphql";
interface registerProps {
}

 
const Register: React.FC<registerProps> = ({}) => {
  const [{}, register] = useRegisterMutation();
  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit= {async (values) => {
          const respsone = await register(values);
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
              <InputField 
              name='username'
              placeholder='username'
              label='Username'
              />
              <Box mt={4}>
                <InputField
                name='password'
                placeholder='password'
                label='Password'
                type='password'
                />
              </Box>
                <Button 
                mt={4} 
                type='submit' 
                colorScheme="teal"
                isLoading={isSubmitting}
                >
                  Register
                </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
