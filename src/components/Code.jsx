import { useContext, useState } from "react";
import Editor from "./Editor";
import { Box, styled } from '@mui/material';
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 50vh;
`;

const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  const [combinedCode, setCombinedCode] = useState('');

  const updateCombinedCode = () => {
    const srcCode = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>${html}</body>
        <script>${js}</script>
      </html>
    `;
    setCombinedCode(srcCode);
  };

  return (
    <Container>
      <Editor
        heading="HTML"
        icon="/"
        color="#FF3C41"
        value={html}
        onChange={(value) => { setHtml(value); updateCombinedCode(); }}
      />
      <Editor
        heading="CSS"
        icon="*"
        color="#0EBEFF"
        value={css}
        onChange={(value) => { setCss(value); updateCombinedCode(); }}
      />
      <Editor
        heading="JavaScript"
        icon="{}"
        color="#FCD000"
        value={js}
        onChange={(value) => { setJs(value); updateCombinedCode(); }}
      />
    </Container>
  );
};

export default Code;
