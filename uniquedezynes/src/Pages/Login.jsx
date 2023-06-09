// import React, { useState } from 'react'
// import { Box, Container,Heading,Image ,Text, Button} from '@chakra-ui/react'
import verify from "../Assets/VerifyPin.jpg";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Flex,
  Spinner,
  Toast,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import img from "../Assets/Login.jpg";
import { useEffect, useRef, useState } from "react";
import otpImg from "../Assets/VerifyPin.jpg";
import OtpInput from "otp-input-react";
import { auth } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast, Toaster } from "react-hot-toast";

export const Login = () => {
  const [otpCount, setOtpCount] = useState(25);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [user, setUser] = useState(null);
  const [ph, setPh] = useState("");
  const toaster = useToast();

  const id = useRef();

  function onCaptchaVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  const onSignup = () => {
    setLoading(true);
    onCaptchaVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOtp(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
       
      });
  };

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        setUser(res.user);
        setLoading(false);
        // toast.success("OTP is Incorrect!");
      })
      .catch((err) => {
        setLoading(false);
        toast.error("OTP is Incorrect!");
      });
  }

  return (
    <>
      <Toaster toastOptions={{ duration: 4000 }} />
      <Box id="recaptcha-container"></Box>
      {!user ? (
        <Box>
          {!showOtp ? (
            <Box h={"100vh"} pt={"20px"} bg={"#F9ECEC"}>
              <Box w={"33%"} m={"10px auto 0 auto"}>
                <Image src={img} />
              </Box>
              <div
                style={{
                  width: "33%",
                  padding: "30px 30px 0 30px",
                  margin: "auto",
                  background: "white",
                }}
              >
                <Heading mb={"25px"} color={"#161515"} fontSize={"18px"}>
                  Login <span>or</span> Signup
                </Heading>

                <PhoneInput
                  width="100%"
                  inputProps={{
                    
                    required: true,
                    autoFocus: true,
                    outerWidth:"100%"
                    
                  }}
                  country={"in"}
                  value={ph}
                  onChange={setPh}
                />
                <Text fontSize={"13px"} m={"24px 0"} color={"gray.500"}>
                  By continuing, I agree to the{" "}
                  <span style={{ color: "#FF3F6C", fontWeight: "bold" }}>
                    Terms of Use
                  </span>{" "}
                  &{" "}
                  <span style={{ color: "#FF3F6C", fontWeight: "bold" }}>
                    Privacy Policy
                  </span>
                </Text>
                <Button
                  onClick={onSignup}
                  type="submit"
                  fontWeight={"bold"}
                  borderRadius={"none"}
                  w={"100%"}
                  fontSize={"15px"}
                  _hover={"none"}
                  color={"white"}
                  bg={"#FF3F6C"}
                >
                  {loading && (
                    <Spinner
                      mr={"5px"}
                      thickness="3px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="pink.300"
                      size="sm"
                    />
                  )}
                  CONTINUE
                </Button>
                <Text fontSize={"13px"} m={"24px 0"} color={"gray.500"}>
                  Have trouble logging in?{" "}
                  <span style={{ color: "#FF3F6C", fontWeight: "bold" }}>
                    Get Help
                  </span>
                </Text>
              </div>
            </Box>
          ) : (
            <Box h={"100vh"} pt={"20px"} bg={"#F9ECEC"}>
              <Box
                p={"35px"}
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "60%",
                  lg: "33%",
                  xl: "33%",
                  "2xl": "33%",
                }}
                m={"10px auto"}
                bg={"white"}
              >
                <Box mb={"20px"}>
                  <Image w={"100px"} src={otpImg} alt="otpImg" />
                </Box>
                <Heading mb={"10px"} fontSize={"20px"}>
                  Verify with OTP
                </Heading>
                <Text color={"gray.500"} fontSize={"14px"}>
                  Sent to +{ph}
                </Text>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  border={"1px solid gray"}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autofocus
                  className="opt-container"
                ></OtpInput>
                <Button
                  onClick={onOTPVerify}
                  borderRadius={"none"}
                  w={"84%"}
                  mt={"20px"}
                  _hover={"none"}
                  bg={"#FF3F6C"}
                  color={"white"}
                  fontWeight={"bold"}
                >
                  {" "}
                  {loading && (
                    <Spinner
                      mr={"5px"}
                      thickness="3px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="pink.300"
                      size="sm"
                    />
                  )}{" "}
                  <span>Verify OTP</span>
                </Button>
                <Flex m={"30px 0 20px 0"} alignItems={"center"}>
                  <Text color={"gray.500"} fontSize={"14px"}>
                    Resend OTP in:
                  </Text>
                  {otpCount !== 0 ? (
                    <Heading ml={"5px"} fontSize={"14px"}>
                      00:{otpCount < 10 ? `0${otpCount}` : otpCount}
                    </Heading>
                  ) : (
                    <Heading fontSize={"15px"}>RESEND OTP</Heading>
                  )}
                </Flex>
                <Flex alignItems={"center"}>
                  <Text fontSize={"14px"}>Log in using</Text>
                  <Heading ml={"5px"} fontSize={"14px"} color={"#FF3F6C"}>
                    Password
                  </Heading>
                </Flex>
                <Flex mt={"20px"} alignItems={"center"}>
                  <Text fontSize={"14px"}>Having trouble logging in?</Text>
                  <Heading ml={"5px"} fontSize={"14px"} color={"#FF3F6C"}>
                    Get help
                  </Heading>
                </Flex>
              </Box>
            </Box>
          )}
        </Box>
      ) : (
        toaster({
          position: "center",
          title: "Login Successful.",
          description: "Welcome Back.",
          status: "success",
          duration: 4000,
          isClosable: true,
        })
      )}
    </>
  );
};
