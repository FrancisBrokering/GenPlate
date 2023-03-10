import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "ja",
    resources: {
      en: {
        translation: {
          noText: "No text to display!",
          beforeGeneratedText:
            "Please enter the content of the text you want to generate.",
          logo: "GenMail",
          copy: "Copy",
          translate: "Translate",
          translating: "Translating",
          original: "original",
          copied: "Copied!",
          darkMode: "Dark Mode",
          lightMode: "Light Mode",
          contact: "Contact",
          japanese: "Japanese",
          english: "English",
          spanish: "Spanish",
          french: "French",
          german: "German",
          italian: "Italian",
          other: "Other",
          editor: {
            placeHolder: "Paste your text here...",
            plainText: "Paste as plain text",
          },
          sidebar: {
            home: "Home",
            email: "Email",
            sns: "Social Media",
            chat: "Chat",
            trend: "Trending",
            favorite: "Favorites",
            settings: "Settings",
            login: "Login",
          },
          login: {
            title: "Log in to your account",
            subtitle: "Don't have an account?",
            titleSignup: "Create an account",
            subtitleSignup: "Already have an account?",
            signup: "Sign up",
            email: "Email",
            password: "Password",
            remember: "Remember me",
            forgot: "Forgot password?",
            login: "Log in",
            continue: "or continue with",
            notRegistered: "This email is not registered",
            differentCredentials: "Account Exists With Different Credentials.",
            wrongPassword: "Password incorrect.",
          },
          resetPassword: {
            title: "Forgot your password?",
            subtitle:
              "Enter your email address and we'll send you a link to reset your password.",
            email: "Email Address",
            example: "example@gmail.com",
            send: "Send",
            required: "Email is required",
            notFound: " We couldn't find an account with that email address.",
            invalidEmail: "Please enter a valid email address.",
            back: "Back to login",
            emailSent: "Email Sent",
            emailSentSubtitle:
              "Check your email for a link to reset your password. If it doesn???t appear within a few minutes, check your spam folder.",
          },
          selectLang: {
            email: "Select Output Language",
            sns: {
              post: "Select Output Language",
              chat: "Select Output Language",
            },
          },
          generating: "Generating",
          tone: {
            label: "Chose a tone",
            button: "Select a Tone",
            happy: "Happy",
            formal: "Formal",
            angry: "Angry",
            casual: "Casual",
            sad: "Sad",
            professional: "Professional",
            funny: "Funny",
            serious: "Serious",
            other: "Other",
          },
          receiver: {
            boss: "Boss",
            colleague: "Colleague",
            friend: "Friend",
            family: "Family Member",
            partner: "Business Partner",
            lover: "Lover",
            other: "Other",
          },
          email: {
            option: "Option",
            New: {
              examples: {
                about:
                  "e.g. Not going to work tomorrow. Kevin will be covering my shift. I plan to be back by Tuesday.",
                who: "e.g. My boss",
              },
              option: "New",
              pageTitle: "Generate Your Email",
              pageSubtitle:
                "Hey there! You can generate a new email right here!",
              button: "Generate",
              about: "What is this Email about?",
              who: "Who is this Email for?",
            },
            Reply: {
              examples: {
                what: "e.g. I am available at 2pm on Tuesday",
              },
              option: "Reply",
              pageTitle: "Generate Email Reply",
              pageSubtitle:
                "Hey there! You can generate an email reply right here!",
              button: "Generate",
              paste: "Paste the Email you received",
              what: "(optional) What do you want to say?",
            },
            Edit: {
              examples: {
                how: "e.g. Correct spelling mistakes\ne.g. Change the tone to formal \ne.g. Add more paragraphs",
              },
              option: "Edit",
              pageTitle: "Edit Your Email",
              pageSubtitle: "Hey there! You can edit your email right here!",
              button: "Generate",
              paste: "Paste the Email you want to edit",
              how: "How do you want to edit?",
            },
          },
          sns: {
            platform: {
              button: "Select a Platform",
              twitter: "Twitter",
              facebook: "Facebook",
              instagram: "Instagram",
              youtube: "YouTube",
              linkedin: "LinkedIn",
            },
            Post: {
              examples: {
                about: "e.g. I went to Hawaii",
              },
              about: "What should this post be about?",
              platform: "Select a Platform",
              option: "New Post",
              pageTitle: "Generate Social Media Post",
              pageSubtitle:
                "Hey there! You can generate a social media post right here!",
              button: "Generate",
            },
            Chat: {
              examples: {
                what: "e.g. available at 2pm on Tuesday",
              },
              option: "Chat",
              pageTitle: "Generate Chat Reply",
              pageSubtitle:
                "Hey there! You can generate a chat reply right here!",
              button: "Generate",
              paste: "Paste the message you received",
              what: "(optional) What do you want to say?",
            },
          },
          tour: {
            modal: {
              title: "Welcome to GenPlate!",
              about:
                "GenPlate is a revolutionary new app that automatically generates E-mail and social media message templates in various languages. With GenPlate, you'll never have to struggle with language barriers again.",
              support:
                "We're still in the process of developing and improving GenPlate, so if you like it, please leave a review to let us know how we're doing.",
              show: "Don't show this modal again.",
              skip: "Skip",
              openTour: "Open Tour",
            },
            firstStep: "Select the desired input and output languages.",
            secondStep:
              "Provide all the necessary details you would like to include in your message.",
            thirdStep:
              "Enter the name of the person or organization you are addressing in your message. ",
            fourthStep:
              "Customize the tone of your email to suit your unique style and voice.",
            fifthStep:
              "You're all set! Now you can generate your own templates!",
            sixthStep:
              "Try out other fields and explore all the features our app has to offer!",
          },
        },
      },
      ja: {
        translation: {
          noText: "??????????????????????????????????????????",
          beforeGeneratedText: "???????????????????????????????????????????????????????????????",
          logo: "??????????????????",
          copy: "?????????",
          translate: "??????",
          translating: "?????????",
          original: "??????",
          copied: "???????????????",
          darkMode: "??????????????????",
          lightMode: "??????????????????",
          contact: "??????????????????",
          japanese: "?????????",
          english: "??????",
          spanish: "???????????????",
          french: "???????????????",
          german: "????????????",
          italian: "???????????????",
          other: "?????????",
          editor: {
            placeHolder: "??????????????????????????????????????????...",
            plainText: "???????????????????????????????????????",
          },
          sidebar: {
            home: "?????????",
            email: "E?????????",
            sns: "SNS",
            chat: "????????????",
            trend: "????????????",
            favorite: "???????????????",
            settings: "??????",
            login: "????????????",
          },
          login: {
            title: "??????????????????????????????",
            subtitle: "??????????????????????????????????????????",
            titleSignup: "????????????",
            subtitleSignup: "????????????????????????????????????",
            signup: "????????????",
            email: "?????????????????????",
            password: "???????????????",
            remember: "???????????????????????????",
            forgot: "???????????????????????????????????????",
            login: "????????????",
            continue: "?????????????????????????????????????????????",
            notRegistered: "?????????????????????????????????????????????????????????",
            differentCredentials:
              "?????????????????????????????????????????????????????????????????????????????????",
            wrongPassword: "???????????????????????????????????????",
          },
          resetPassword: {
            title: "???????????????????????????????????????",
            subtitle: "????????????????????????????????????????????????????????????",
            email: "?????????????????????",
            example: "example@gmail.com",
            send: "??????",
            required: "????????????????????????????????????????????????",
            notFound: "?????????????????????????????????????????????????????????",
            invalidEmail: "????????????????????????????????????",
            back: "??????????????????????????????",
            emailSent: "??????",
            emailSentSubtitle: "????????????????????????????????????????????????????????????",
          },
          selectLang: {
            email: "???????????????E?????????????????????????????????????????????",
            sns: {
              post: "?????????????????????????????????????????????",
              chat: "??????????????????????????????????????????????????????????????????",
            },
          },
          generating: "?????????",
          tone: {
            label: "?????????????????????????????????",
            button: "- ?????? -",
            happy: "????????????",
            formal: "???????????????",
            angry: "??????",
            casual: "???????????????",
            sad: "?????????",
            professional: "???????????????????????????",
            funny: "?????????",
            serious: "??????",
            other: "?????????",
          },
          receiver: {
            boss: "??????",
            colleague: "??????",
            friend: "??????",
            family: "??????",
            partner: "?????????",
            lover: "??????",
            other: "?????????",
          },
          email: {
            option: "???????????????",
            New: {
              examples: {
                about:
                  "??????) ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
                who: "???????????????",
              },
              option: "??????",
              pageTitle: "??????E??????????????????",
              pageSubtitle: "??????????????????????????????????????????????????????",
              button: "??????",
              about: "E?????????????????????????????????????????????",
              who: "?????????E?????????????????????",
            },
            Reply: {
              examples: {
                what: "????????????????????????????????????2??????????????????????????????????????????????????????????????????????????????????????????",
              },
              option: "??????",
              pageTitle: "E???????????????????????????",
              pageSubtitle: "??????????????????????????????????????????????????????",
              button: "??????",
              paste: "??????????????????E???????????????????????????????????????",
              what: "???????????????????????????????????????????????? (????????????????????????????????????????????????) ",
            },
            Edit: {
              examples: {
                how: "(????????????????????????\n(??????????????????????????????????????????\n(???????????????????????????",
              },
              option: "??????",
              pageTitle: "E??????????????????",
              pageSubtitle: "????????????????????????????????????????????????",
              button: "??????",
              paste: "???????????????E???????????????????????????????????????",
              how: "???????????????????????????????????????",
            },
          },
          sns: {
            platform: {
              button: "- ?????? -",
              twitter: "Twitter",
              facebook: "Facebook",
              instagram: "Instagram",
              youtube: "YouTube",
              linkedin: "LinkedIn",
            },
            Post: {
              examples: {
                about:
                  "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
              },
              about: "SNS?????????????????????????????????????????????",
              platform: "???????????????????????????????????????????????????",
              option: "???????????????",
              pageTitle: "SNS??????????????????",
              pageSubtitle: "??????????????????SNS????????????????????????????????????",
              button: "??????",
            },
            Chat: {
              examples: {
                what: " ???????????????????????????2?????????????????????????????????????????????????????????????????????",
              },
              option: "????????????",
              pageTitle: "??????????????????????????????",
              pageSubtitle: "?????????????????????????????????????????????????????????",
              button: "??????",
              paste: "????????????????????????????????????????????????????????????",
              what: "(??????????????????) ????????????????????????????????????????????????",
            },
          },
          tour: {
            modal: {
              title: "GenPlate???????????????",
              about:
                "GenPlate??????????????????SNS????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
              support:
                "GenPlate???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
              show: "???????????????????????????????????????????????????",
              skip: "????????????",
              openTour: "??????????????????",
            },
            firstStep:
              "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            secondStep: "????????????????????????????????????????????????????????????",
            thirdStep:
              "??????????????????????????????????????????????????????????????????????????????????????????",
            fourthStep:
              "??????????????????????????????????????????????????????????????????????????????????????????????????????",
            fifthStep: "???????????????????????????????????????????????????",
            sixthStep: "SNS??????????????????????????????????????????????????????????????????",
          },
        },
      },
    },
    debug: process.env.NODE_ENV === "development",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
