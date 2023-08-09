import { useContext } from 'react';
import { AppBar, Toolbar, styled, Button, Box } from '@mui/material';
import { DataContext } from '../context/DataProvider';

const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;
`;

const Header = () => {
  const { html, css, js } = useContext(DataContext);

  const handleDownload = () => {
    const combinedCode = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;

    const element = document.createElement('a');
    const file = new Blob([combinedCode], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'code.html';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Container position="static">
      <Toolbar>
        <Box flexGrow={1}>Web Code Editor</Box>
        <Box mr={2}>
          <Button onClick={handleDownload} variant="contained" color="primary">
            Download Code
          </Button>
        </Box>
      </Toolbar>
    </Container>
  );
};

export default Header;
