import {AppBar, Box, Button, Container, Grid, MenuItem, Select, TextField, Toolbar, Typography} from "@mui/material";
import Image from "next/image";
import {common, grey} from "@mui/material/colors";
import BorderedBottomBox from "../../Wrapper/BorderedBottomBox";

const Header = () => {
  return (
    <BorderedBottomBox>
      <AppBar sx={{
        backgroundColor: 'transparent',
        padding: '25px 20px',
        position: 'absolute'
      }}
      elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs>
              <Image
                src="/__images/netflix.svg"
                height="45px"
                width="167px"
                layout="intrinsic"
                alt="Netflix logo"
              />
            </Grid>
            <Grid item xs="auto">
              <Select
                name="lang"
                variant="outlined"
                size="small"
                defaultValue="ID"
                sx={{
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: 'common.white',
                  color: 'common.white',
                  '&.MuiSelect-icon': {
                    color: 'common.white'
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                  }
                }}
              >
                <MenuItem value="ID">Bahasa Indonesia</MenuItem>
                <MenuItem value="EN">English</MenuItem>
              </Select>
            </Grid>
            <Grid item xs="auto">
              <Button
                color="primary"
                variant="contained"
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box sx={{
        position: 'relative',
        height: '745px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.6) 0,
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, 0.8) 100%,
          )`
        }
      }}
      >
        <Image
          priority
          src = "/__images/backdrop.jpg"
          layout="fill"
          objectFit="cover"
          alt="Backdrop Netflix"
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1000}}>
          <Typography
            variant="h3"
            component="h4"
            color="common.white"
            fontWeight="600"
            textAlign="center"
          >
            Film, acara TV tak terbatas, dan lebih banyak lagi.
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="common.white"
            textAlign="center"
            gutterBottom
          >
            Tonton di mana pun. Batalkan kapan pun.
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="common.white"
            textAlign="center"
            sx = {{ my: 3 }}
          >
            Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.
          </Typography>
          <Grid container>
            <Grid item xs>
              <TextField
                variant="filled"
                label="Alamat Email"
                fullWidth
                sx={{ bgcolor: 'common.white'}}
              />
            </Grid>
            <Grid item xs="auto">
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ height: '100%', borderRadius: '2px' }}
              >
                Mulai
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </BorderedBottomBox>
  );
};

export default Header
