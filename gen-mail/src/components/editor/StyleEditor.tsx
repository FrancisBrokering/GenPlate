/* body {
  margin: 0;
  background: #eee;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular",
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
// import { useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

import arrow_counterclockwise from "./logos/arrow-counterclockwise.svg";
import arrow_clockwise from "./logos/arrow-clockwise.svg";
import text_paragraph from "./logos/text-paragraph.svg";
import type_h1 from "./logos/type-h1.svg";
import type_h2 from "./logos/type-h2.svg";
import list_ul from "./logos/list-ul.svg";
import list_ol from "./logos/list-ol.svg";
import chat_square_quote from "./logos/chat-square-quote.svg";
import code from "./logos/code.svg";
import type_bold from "./logos/type-bold.svg";
import type_italic from "./logos/type-italic.svg";
import type_underline from "./logos/type-underline.svg";
import type_strikethrough from "./logos/type-strikethrough.svg";
import link from "./logos/link.svg";
import pencil_fill from "./logos/pencil-fill.svg";
import chevron_down from "./logos/chevron-down.svg";

// const Editor_Bg = useColorModeValue("white", "gray.700");

type StyledEditorProps = {
  theme: string;
};

const StyledEditor = styled("div")<StyledEditorProps>`
  .other h2 {
    font-size: 18px;
    color: #444;
    margin-bottom: 7px;
  }

  .other a {
    color: #777;
    text-decoration: underline;
    font-size: 14px;
  }

  .other ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  .App {
    font-family: sans-serif;
    text-align: center;
  }

  h1 {
    font-size: 24px;
    color: #333;
  }

  .ltr {
    text-align: left;
  }

  .rtl {
    text-align: right;
  }

  .editor-container {
    margin: 0px auto 0px auto;
    /* border-radius: 2px; */
    max-width: 500px;
    color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
    position: relative;
    line-height: 20px;
    font-weight: 400;
    text-align: left;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /* border-top: 1px solid #e2e8f0; */
    /* border-right: 1px solid gray; */
    /* border-bottom: 1px solid #e2e8f0; */
  }

  .editor-inner {
    background: ${(props) => (props.theme === "dark" ? "#2D3748" : "#fff")};
    position: relative;
    
    
    /* border-right: 1px solid gray; */
    /* border-color: ${(props) =>
      props.theme === "dark" ? "#4A5568" : "#e2e8f0"}; */
    border-top: 1px solid
      ${(props) => (props.theme === "dark" ? "#4A5568" : "#e2e8f0")};
    border-bottom: 1px solid
      ${(props) => (props.theme === "dark" ? "#4A5568" : "#e2e8f0")};
    min-height: 75vh;
  }

  .editor-input {
    min-height: 150px;
    resize: none;
    font-size: 15px;
    caret-color: rgb(5, 5, 5);
    position: relative;
    tab-size: 1;
    outline: 0;
    padding: 15px 10px;
    caret-color: ${(props) => (props.theme === "dark" ? "#a9a9a9" : "#444")};
  }

  .editor-placeholder {
    color: ${(props) => props.theme === "dark" ? "#CBD5E0" : "#999"};
    overflow: hidden;
    position: absolute;
    text-overflow: ellipsis;
    top: 15px;
    left: 10px;
    font-size: 15px;
    user-select: none;
    display: inline-block;
    pointer-events: none;
  }

  .editor-text-bold {
    font-weight: bold;
  }

  .editor-text-italic {
    font-style: italic;
  }

  .editor-text-underline {
    text-decoration: underline;
  }

  .editor-text-strikethrough {
    text-decoration: line-through;
  }

  .editor-text-underlineStrikethrough {
    text-decoration: underline line-through;
  }

  .editor-text-code {
    background-color: ${(props) =>
      props.theme === "dark" ? "rgb(39, 39, 39)" : "rgb(240, 242, 245)"};
    padding: 1px 0.25rem;
    font-family: Menlo, Consolas, Monaco, monospace;
    font-size: 94%;
  }

  .editor-link {
    color: ${(props) =>
      props.theme === "dark" ? "rgb(65, 135, 232)" : "rgb(33, 111, 219)"};
    text-decoration: none;
  }

  .editor-code {
    background-color: ${(props) =>
      props.theme === "dark" ? "rgb(48, 48, 48)" : "rgb(240, 242, 245)"};
    font-family: Menlo, Consolas, Monaco, monospace;
    display: block;
    padding: 8px 8px 8px 52px;
    line-height: 1.53;
    font-size: 13px;
    margin: 0;
    margin-top: 8px;
    margin-bottom: 8px;
    tab-size: 2;
    /* white-space: pre; */
    overflow-x: auto;
    position: relative;
  }

  .editor-code:before {
    content: attr(data-gutter);
    position: absolute;
    background-color: #eee;
    left: 0;
    top: 0;
    border-right: 1px solid #ccc;
    padding: 8px;
    color: #777;
    white-space: pre-wrap;
    text-align: right;
    min-width: 25px;
  }
  .editor-code:after {
    content: attr(data-highlight-language);
    top: 0;
    right: 3px;
    padding: 3px;
    font-size: 10px;
    text-transform: uppercase;
    position: absolute;
    color: rgba(0, 0, 0, 0.5);
  }

  .editor-tokenComment {
    color: slategray;
  }

  .editor-tokenPunctuation {
    color: #999;
  }

  .editor-tokenProperty {
    color: #905;
  }

  .editor-tokenSelector {
    color: #690;
  }

  .editor-tokenOperator {
    color: #9a6e3a;
  }

  .editor-tokenAttr {
    color: #07a;
  }

  .editor-tokenVariable {
    color: #e90;
  }

  .editor-tokenFunction {
    color: #dd4a68;
  }

  .editor-paragraph {
    margin: 0;
    margin-bottom: 8px;
    position: relative;
  }

  .editor-paragraph:last-child {
    margin-bottom: 0;
  }

  .editor-heading-h1 {
    font-size: 24px;
    color: rgb(5, 5, 5);
    font-weight: 400;
    margin: 0;
    margin-bottom: 12px;
    padding: 0;
  }

  .editor-heading-h2 {
    font-size: 15px;
    color: rgb(101, 103, 107);
    font-weight: 700;
    margin: 0;
    margin-top: 10px;
    padding: 0;
    text-transform: uppercase;
  }

  .editor-quote {
    margin: 0;
    margin-left: 20px;
    font-size: 15px;
    color: rgb(101, 103, 107);
    border-left-color: rgb(206, 208, 212);
    border-left-width: 4px;
    border-left-style: solid;
    padding-left: 16px;
  }

  .editor-list-ol {
    padding: 0;
    margin: 0;
    margin-left: 16px;
  }

  .editor-list-ul {
    padding: 0;
    margin: 0;
    margin-left: 16px;
  }

  .editor-listitem {
    margin: 8px 32px 8px 32px;
  }

  .editor-nested-listitem {
    list-style-type: none;
  }

  pre::-webkit-scrollbar {
    background: transparent;
    width: 10px;
  }

  pre::-webkit-scrollbar-thumb {
    background: #999;
  }

  .debug-timetravel-panel {
    overflow: hidden;
    padding: 0 0 10px 0;
    margin: auto;
    display: flex;
  }

  .debug-timetravel-panel-slider {
    padding: 0;
    flex: 8;
  }

  .debug-timetravel-panel-button {
    padding: 0;
    border: 0;
    background: none;
    flex: 1;
    color: #fff;
    font-size: 12px;
  }

  .debug-timetravel-panel-button:hover {
    text-decoration: underline;
  }

  .debug-timetravel-button {
    border: 0;
    padding: 0;
    font-size: 12px;
    top: 10px;
    right: 15px;
    position: absolute;
    background: none;
    color: #fff;
  }

  .debug-timetravel-button:hover {
    text-decoration: underline;
  }

  .emoji {
    color: transparent;
    background-size: 16px 16px;
    background-position: center;
    background-repeat: no-repeat;
    vertical-align: middle;
    margin: 0 -1px;
  }

  .emoji-inner {
    padding: 0 0.15em;
  }

  .emoji-inner::selection {
    color: transparent;
    background-color: rgba(150, 150, 150, 0.4);
  }

  .emoji-inner::moz-selection {
    color: transparent;
    background-color: rgba(150, 150, 150, 0.4);
  }

  /* .emoji.happysmile {
  background-image: url(./images/emoji/1F642.png);
  } */

  .toolbar {
    display: flex;
    height: 44px;
    padding-bottom: 1px;
    background: ${(props) => (props.theme === "dark" ? "#2D3748" : "#fff")};
    padding: 4px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    vertical-align: middle;
  }

  .toolbar button.toolbar-item {
    border: 0;
    display: flex;
    background: none;
    border-radius: 10px;
    padding: 8px;
    cursor: pointer;
    vertical-align: middle;
  }

  .toolbar button.toolbar-item:disabled {
    cursor: not-allowed;
  }

  .toolbar button.toolbar-item.spaced {
    margin-right: 2px;
  }

  .toolbar button.toolbar-item i.format {
    background-size: contain;
    display: inline-block;
    height: 18px;
    width: 18px;
    margin-top: 2px;
    vertical-align: -0.25em;
    display: flex;
    opacity: 0.6;
  }

  .toolbar button.toolbar-item:disabled i.format {
    opacity: 0.2;
  }

  .toolbar button.toolbar-item.active {
    background-color: rgba(223, 232, 250, 0.3);
  }

  .toolbar button.toolbar-item.active i {
    opacity: 1;
  }

  .toolbar .toolbar-item:hover:not([disabled]) {
    background-color: ${(props) =>
      props.theme === "dark" ? "#525252" : "#eee"};
  }

  .toolbar .divider {
    width: 1px;
    background-color: ${(props) =>
      props.theme === "dark" ? "#4A5568" : "#eee"};
    margin: 0 4px;
  }

  .toolbar select.toolbar-item {
    border: 0;
    display: flex;
    background: none;
    border-radius: 10px;
    padding: 8px;
    vertical-align: middle;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 70px;
    font-size: 14px;
    color: #777;
    text-overflow: ellipsis;
  }

  .toolbar select.code-language {
    text-transform: capitalize;
    width: 130px;
  }

  .toolbar .toolbar-item .text {
    display: flex;
    line-height: 20px;
    width: 200px;
    vertical-align: middle;
    font-size: 14px;
    color: ${(props) => props.theme === "dark" ? "#E2E8F0" : "#777"};
    text-overflow: ellipsis;
    width: 70px;
    overflow: hidden;
    height: 20px;
    text-align: left;
  }

  .toolbar .toolbar-item .icon {
    display: flex;
    width: 20px;
    height: 20px;
    user-select: none;
    margin-right: 8px;
    line-height: 16px;
    background-size: contain;
  }

  .toolbar i.chevron-down {
    margin-top: 3px;
    width: 16px;
    height: 16px;
    display: flex;
    user-select: none;
  }

  .toolbar i.chevron-down.inside {
    width: 16px;
    height: 16px;
    display: flex;
    margin-left: -25px;
    margin-top: 11px;
    margin-right: 10px;
    pointer-events: none;
  }

  i.chevron-down {
    background-color: transparent;
    background-size: contain;
    display: inline-block;
    height: 8px;
    width: 8px;
    background-image: url(${chevron_down});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  .blocdown-list {
    position: absolute;
  }

  #block-controls button:hover {
    background-color: #efefef;
  }

  #block-controls button:focus-visible {
    border-color: blue;
  }

  #block-controls span.block-type {
    background-size: contain;
    display: block;
    width: 18px;
    height: 18px;
    margin: 2px;
  }

  #block-controls span.block-type.paragraph {
    background-image: url(${text_paragraph});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  #block-controls span.block-type.h1 {
    background-image: url(${type_h1});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  #block-controls span.block-type.h2 {
    background-image: url(${type_h2});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  #block-controls span.block-type.quote {
    background-image: url(${chat_square_quote});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  #block-controls span.block-type.ul {
    background-image: url(${list_ul});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  #block-controls span.block-type.ol {
    background-image: url(${list_ol});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  #block-controls span.block-type.code {
    background-image: url(${code});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  .dropdown {
    z-index: 20;
    display: block;
    position: absolute;
    box-shadow: ${(props) => props.theme === "dark" 
      ? "0 12px 28px 0 rgba(255, 255, 255, 0.2), 0 2px 4px 0 rgba(255, 255, 255, 0.1), inset 0 0 0 1px rgba(45, 55, 72, 0.5)" 
      : "0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5)"
    };
    border-radius: 8px;
    min-width: 100px;
    min-height: 40px;
    background-color: ${(props) => props.theme === "dark" ? "#2D3748" : "#fff"};
  }

  .dropdown .item {
    margin: 0 8px 0 8px;
    padding: 8px;
    color: ${(props) => props.theme === "dark" ? "#E2E8F0" : "#050505"};
    cursor: pointer;
    line-height: 16px;
    font-size: 15px;
    display: flex;
    align-content: center;
    flex-direction: row;
    flex-shrink: 0;
    justify-content: space-between;
    background-color: ${(props) => props.theme === "dark" ? "#2D3748" : "#fff"};
    border-radius: 8px;
    border: 0;
    min-width: 268px;
  }

  .dropdown .item .active {
    display: flex;
    width: 20px;
    height: 20px;
    background-size: contain;
  }

  .dropdown .item:first-child {
    margin-top: 8px;
  }

  .dropdown .item:last-child {
    margin-bottom: 8px;
  }

  .dropdown .item:hover {
    background-color: ${(props) => props.theme === "dark" ? "#4A5568" : "#eee"};
  }

  .dropdown .item .text {
    display: flex;
    line-height: 20px;
    flex-grow: 1;
    width: 200px;
  }

  .dropdown .item .icon {
    display: flex;
    width: 20px;
    height: 20px;
    user-select: none;
    margin-right: 12px;
    line-height: 16px;
    background-size: contain;
  }

  .link-editor {
    position: absolute;
    z-index: 100;
    top: -10000px;
    left: -10000px;
    margin-top: -6px;
    max-width: 300px;
    width: 100%;
    opacity: 0;
    background-color: #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    transition: opacity 0.5s;
  }

  .link-editor .link-input {
    display: block;
    width: calc(100% - 24px);
    box-sizing: border-box;
    margin: 8px 12px;
    padding: 8px 12px;
    border-radius: 15px;
    background-color: #eee;
    font-size: 15px;
    color: rgb(5, 5, 5);
    border: 0;
    outline: 0;
    position: relative;
    font-family: inherit;
  }

  .link-editor div.link-edit {
    background-image: url(${pencil_fill});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
    background-size: 16px;
    background-position: center;
    background-repeat: no-repeat;
    width: 35px;
    vertical-align: -0.25em;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    cursor: pointer;
  }

  .link-editor .link-input a {
    color: rgb(33, 111, 219);
    text-decoration: none;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    margin-right: 30px;
    text-overflow: ellipsis;
  }

  .link-editor .link-input a:hover {
    text-decoration: underline;
  }

  .link-editor .button {
    width: 20px;
    height: 20px;
    display: inline-block;
    padding: 6px;
    border-radius: 8px;
    cursor: pointer;
    margin: 0 2px;
  }

  .link-editor .button.hovered {
    width: 20px;
    height: 20px;
    display: inline-block;
    background-color: #eee;
  }

  .link-editor .button i,
  .actions i {
    background-size: contain;
    display: inline-block;
    height: 20px;
    width: 20px;
    vertical-align: -0.25em;
  }

  i.undo {
    background-image: url(${arrow_counterclockwise});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  i.redo {
    background-image: url(${arrow_clockwise});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  .icon.paragraph {
    background-image: url(${text_paragraph});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  .icon.large-heading,
  .icon.h1 {
    background-image: url(${type_h1});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  .icon.small-heading,
  .icon.h2 {
    background-image: url(${type_h2});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  .icon.bullet-list,
  .icon.ul {
    background-image: url(${list_ul});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  .icon.numbered-list,
  .icon.ol {
    background-image: url(${list_ol});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  .icon.quote {
    background-image: url(${chat_square_quote});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  .icon.code {
    background-image: url(${code});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  i.bold {
    background-image: url(${type_bold});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  i.italic {
    background-image: url(${type_italic});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  i.underline {
    background-image: url(${type_underline});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  i.strikethrough {
    background-image: url(${type_strikethrough});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  i.code {
    background-image: url(${code});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }

  i.link {
    background-image: url(${link});
    filter: invert(${(props) => (props.theme === "dark" ? 1 : 0)});
  }
`;

export default StyledEditor;
