import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: '100%',
    maxHeight: '20vh'
  }
});

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.container}>
      <Box
        px={{ xs: 3, sm: 5 }}
        py={{ xs: 5, sm: 5 }}
        bgcolor="#3f51b5"
        color="white"
        sx={{ fontSize: 20, fontWeight: 'medium' }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} columns={1}>
            <Grid item xs={12} md={4}>
              <Box borderBottom={1} fontSize={16} fontWeight={700}>
                Help
              </Box>
              <Box>
                <Link href="/" color="inherit" variant="body2">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" variant="body2">
                  Support
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box borderBottom={1} fontSize={16} fontWeight={700}>
                Account
              </Box>
              <Box>
                <Link href="/" color="inherit" variant="body2">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" variant="body2">
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box borderBottom={1} fontSize={16} fontWeight={700}>
                Messages
              </Box>
              <Box>
                <Link href="/" color="inherit" variant="body2">
                  Backup
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" variant="body2">
                  History
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box
            textAlign="center"
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}
            fontSize={16}
            fontWeight={700}
          >
            React News App &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
