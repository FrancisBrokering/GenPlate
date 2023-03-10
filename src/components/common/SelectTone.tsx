import {
  Box,
  Checkbox,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  Radio,
  RadioGroup,
  Select,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import InstructionStep from "./InstructionStep";

type SelectToneProps = {
  setTone: (tone: string) => void;
  tone: string;
  currentStep: number;
  className: string;
};

const SelectTone = (props: SelectToneProps) => {
  const { t } = useTranslation();
  const Placeholder_Color = useColorModeValue("gray.500", "gray.200");
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const toneOptions = [
    { value: "happy", label: "ð " + t("tone.happy") },
    { value: "casual", label: "ð " + t("tone.casual") },
    { value: "formal", label: "ð " + t("tone.formal") },
    // { value: "professional", label: "ðž " + t("tone.professional") },
    // { value: "angry", label: "ðĪŽ " + t("tone.angry") },
    { value: "sad", label: "ðĒ " + t("tone.sad") },
    { value: "funny", label: "ð " + t("tone.funny") },
    // { value: "informal", label: "ðĪŠ " + t("tone.informal")},
    { value: "serious", label: "ðĄ " + t("tone.serious") },
  ];

  return (
    <Box>
      {/* <FormLabel>âĢ {t("tone.label")}</FormLabel> */}
      <InstructionStep
        instructionPrompt={t("tone.label")}
        stepNumber={4}
        currentStep={props.currentStep}
      />
      <RadioGroup
        mb={"10px"}
        _placeholder={{ color: Placeholder_Color }}
        placeholder={isOtherSelected ? "other" : props.tone}
        onChange={(value) => {
          if (value === "other") {
            setIsOtherSelected(true);
          } else {
            setIsOtherSelected(false);
            props.setTone(value);
          }
        }}
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          templateRows={{
            base: "repeat(7, 1fr)",
            sm: "repeat(4, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={{ base: 1, md: 6 }}
          className={props.className}
        >
          {toneOptions.map((toneOption) => {
            return (
              <GridItem
                colSpan={{
                  base: 1,
                  sm: 1,
                  md: 1,
                }}
                rowSpan={{
                  base: 1,
                  sm: 1,
                  md: 1,
                }}
                key={toneOption.value}
                border="solid #e2e8f0"
                rounded="8px"
                display="flex"
                alignItems="center"
                bg={props.tone === toneOption.value ? "#F2F7FF" : "white"}
              >
                <Radio
                  w="100%"
                  h="55px"
                  padding="0px 22px 0px 22px"
                  value={toneOption.value}>{toneOption.label}</Radio>
              </GridItem>
            );
          })}
          {
            <GridItem
              colSpan={{
                base: 1,
                sm: 2,
                md: 3,
              }}
              rowSpan={{
                base: 1,
                sm: 1,
                md: 1,
              }}
              rounded="8px"
              display="flex"
              alignItems="center"
              bg={isOtherSelected ? "#F2F7FF" : "white"}
            >
              <InputGroup>
                <Input
                  h="55px"
                  border="solid #e2e8f0"
                  placeholder={t("tone.other") as string}
                  onChange={(e) => {
                    props.setTone(e.target.value);
                    setIsOtherSelected(true);
                  }}
                // value={props.tone}
                />
              </InputGroup>
            </GridItem>
          }
        </Grid>
      </RadioGroup>
    </Box>
  );
};

export default SelectTone;
