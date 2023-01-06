import {
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
  Button,
  Divider,
  Select,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import GeneratedText from "../common/GeneratedText";

type ReplyEmailProps = {
  lang: string;
};

const ReplyEmail = (props: ReplyEmailProps) => {
  const { t } = useTranslation();
  const [emailDescription, setEmailDescription] = useState("");
  const [tone, setTone] = useState("formal");
  const [reply, setReply] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResult] = useState(["", "", ""]);

  async function handleSubmit(event: React.FormEvent) {
    setIsGenerating(true);
    event.preventDefault();
    let details = emailDescription;
    if (emailDescription != "") {
      details = " including the details " + emailDescription + " ";
    }
    const data = {
      email:
        "In a" +
        tone +
        " tone, write an reply to the following email " +
        details +
        ": " +
        reply,
    };
    console.log("data is: ", data);
    const response = await fetch("http://localhost:8080", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();
    console.log("result is: ", json);
    setIsGenerating(false);
    setResult(json.result);
    setReply("");
    setEmailDescription("");
  }

  return (
    <Box position={"relative"}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>②{t("email.replyEmail.paste")}</FormLabel>
          <Textarea
            mb="20px"
            minH="200px"
            name="reply"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <FormLabel>③{t("email.replyEmail.what")}</FormLabel>
          <Input
            mb="20px"
            type="text"
            name="description"
            value={emailDescription}
            onChange={(e) => setEmailDescription(e.target.value)}
            placeholder={t("email.replyEmail.examples.what") as string}
          />
          <FormLabel>④{t("email.replyEmail.tone")}</FormLabel>
          <Select
            placeholder={t("tone.button") as string}
            onChange={(e) => setTone(e.target.value)}
          >
            <option value={"friendly"}>😊 {t("tone.friendly")}</option>
            <option value={"formal"}>💼 {t("tone.formal")}</option>
            <option value={"angry"}>🤬 {t("tone.angry")}</option>
            <option value={"casual"}>😌 {t("tone.casual")}</option>
            <option value={"professional"}>👔 {t("tone.professional")}</option>
          </Select>
          {isGenerating ? (
            <Button
              mt="20px"
              isLoading
              loadingText={t("generating") as string}
            />
          ) : (
            <Button
              mt="20px"
              colorScheme="blue"
              bg="cyan.400"
              _hover={{ bg: "#7dc5ea" }}
              variant="solid"
              type="submit"
            >
              {t("email.replyEmail.button") as string}
            </Button>
          )}
        </FormControl>
      </form>
      <Box maxW="100%" whiteSpace="pre-wrap" pb="200px">
        {results[0] === "" ? (
          <></>
        ) : (
          results.map((r, index) => {
            return <GeneratedText key={index} index={index} result={r} />;
          })
        )}
      </Box>
    </Box>
  );
};

export default ReplyEmail;
