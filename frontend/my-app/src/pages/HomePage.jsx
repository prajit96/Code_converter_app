import {
    Box,
    Stack,
    HStack,
    Select,
    Button,
    Container,
  } from "@chakra-ui/react";
  import React, { useRef, useState } from "react";
  import Loading from "../components/Loading";
  import axios from "axios";
  import Markdown from "react-markdown";
import CodeEditor from "../components/Codeediter";

  
  const Home = () => {
    const [code, setCode] = useState("Write your code here");
    const [language, setLanguage] = useState("JavaScript");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(
      "# Hi there, *Output will be here...*!"
    );
    const messageBoxRef = useRef();
  
    //handleCodeEditor code
    const handleCodeChange = (newCode) => {
      setCode(newCode);
    };
  
    //handleCONVERT code
    const handleConvert = async () => {
      messageBoxRef.current.focus();
      if (code && language) {
        let obj = {
          code: code,
          language: language,
        };
        setLoading(true);
        try {
          const response = await axios.post(
            "https://code-converter-backend-qmm7.onrender.com/convert",
            obj,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setLoading(false);
          setMessage(response?.data?.msg);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
    };
  
    //handleDEBUG code
    const handleDebug = async () => {
      messageBoxRef.current.focus();
      if (code) {
        let obj = {
          code: code,
        };
        setLoading(true);
        try {
          const response = await axios.post(
            "https://code-converter-backend-qmm7.onrender.com/debug",
            obj,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setLoading(false);
          setMessage(response?.data?.msg);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
    };
  
    //handleQUALITYCHECK code
    const handleQualityCheck = async () => {
      messageBoxRef.current.focus();
      if (code) {
        let obj = {
          code: code,
        };
        setLoading(true);
        try {
          const response = await axios.post(
            "https://code-converter-backend-qmm7.onrender.com/qualitycheck",
            obj,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setLoading(false);
          setMessage(response?.data?.msg);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
    };
  
    return (
        <Box bg="gray.900" color="white">
          <Stack
            direction={{ base: "column", md: "column", lg: "row" }}
            justifyContent="space-around"
            alignItems="center"
            bg="purple.600"
            padding="15px"
          >
            <HStack spacing={4}>
              <Select
                bg="gray.200"
                borderColor="gray.200"
                color="pink.700"
                width="200px"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                isDisabled={loading}
              >
                <option value="javaScript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="php">PHP</option>
              </Select>
              <Button
                colorScheme="green"
                bg="green.400"
                _hover={{ bg: "green.500" }}
                onClick={handleConvert}
                isDisabled={loading}
              >
                CONVERT
              </Button>
            </HStack>
            <HStack>
              <Button
                colorScheme="red"
                bg="red.400"
                _hover={{ bg: "red.500" }}
                onClick={handleDebug}
                isDisabled={loading}
              >
                DEBUG
              </Button>
              <Button
                colorScheme="telegram"
                bg="teal.400"
                _hover={{ bg: "teal.500" }}
                onClick={handleQualityCheck}
                isDisabled={loading}
              >
                QUALITY CHECK
              </Button>
            </HStack>
          </Stack>
    
          <Container
            maxW="100%"
            minHeight="calc(100vh - 195px)"
            overflow="hidden"
            margin="0"
            padding="0"
          >
            <Stack
              direction={{ base: "column", md: "row", lg: "row" }}
              margin="0"
              spacing={0}
              bg="gray.800"
            >
              <Box width={{ base: "100%", md: "100%", lg: "50%" }}>
                <CodeEditor code={code} onChange={handleCodeChange} />
              </Box>
              <Box
                overflowY="auto"
                className="custom-scrollbar"
                width={{ base: "100%", md: "100%", lg: "50%" }}
                height="calc(100vh - 195px)"
                padding="10px"
              >
                {loading ? (
                  <Stack
                    justifyContent="center"
                    height="calc(100vh - 195px)"
                    alignItems="center"
                  >
                    <Loading />
                  </Stack>
                ) : (
                  <Box style={{ paddingLeft: "20px" }} ref={messageBoxRef} tabIndex={0}>
                    <Markdown>{message}</Markdown>
                  </Box>
                )}
              </Box>
            </Stack>
          </Container>
        </Box>
      );
  };
  
  export default Home;