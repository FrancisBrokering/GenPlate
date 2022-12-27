import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Sidebar from '../components/SideBar';
import NewEmail from '../components/Email/NewEmail';
import { Box, Center, Select } from '@chakra-ui/react';
import ReplyEmail from '../components/Email/ReplyEmail';
import ReviewEmail from '../components/Email/ReviewEmail';
import EditEmail from '../components/Email/EditEmail';
import { useTranslation } from "react-i18next";

const Home = () => {
  const [generateOption, setGenerateOption] = useState("New");
  const [language, setLanguage] = useState("ja");
  const { t, i18n } = useTranslation()

  function GenerateOption() {
    switch (generateOption) {
      case "New":
        return (<NewEmail lang={language} />)
      case "Reply":
        return (<ReplyEmail lang={language} />)
      case "Edit":
        return (<EditEmail lang={language} />)
      case "Review":
        return (<ReviewEmail lang={language}/>)
      default:
        return (<NewEmail lang={language} />);
    }
  }

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

return (
  <>
    <Sidebar >
      <StyledHome>
        <Box margin='100px 200px 0px 200px'>
          <Select mb='15px' onChange={(e)=>setLanguage(e.target.value)} w='300px'>
            <option value="ja">JP 🇯🇵</option>
            <option value="en">EN 🇺🇸</option>
          </Select>
          <Select mb='15px' onChange={(e) => setGenerateOption(e.target.value)} w='300px'>
            <option value='New'>✉️ {t("email.newEmail.option")}</option>
            <option value='Reply'>📩 {t("email.replyEmail.option")}</option>
            <option value='Edit'>📧 {t("email.editEmail.option")}</option>
            <option value='Review'>📨 {t("email.reviewEmail.option")}</option>
          </Select>
          {GenerateOption()}
        </Box>
      </StyledHome>
    </Sidebar>
  </>

)
}

const StyledHome = styled('div')`
    width: 100%;
    height: 100vh;
    position: relative;

    .center {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
`

export default Home;
