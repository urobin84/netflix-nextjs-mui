import BorderedBottomBox from "../../Wrapper/BorderedBottomBox";

const Title = ({text}) => (
  <Typography
    variant="h3"
    component="h2"
    gutterBottom
    sx={{
      textAlign: { xs: 'center', md: 'left'}
    }}
  >
    {text}
  </Typography>
)

const Description = ({text}) => (
  <Typography
    variant="h5"
    component="h3"
    sx={{
      textAlign: { xs: 'center', md: 'left'}
    }}
  >
    {text}
  </Typography>
)
const Features = () => {
  return (
    <Box sx={{
      bgcolor: 'common.black',
      color: 'common.white'
    }}>
      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container alignItems="center" columnSpacing={12}>
            <Grid item xs={12} md={6}>
              <Title text="Nikmati di TV-mu." />
              <Description text="Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi." />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Image
                    src="/__images/tv.png"
                    alt="TV"
                    width="640px"
                    height="480px"
                    layout="responsive"
                  />
                </Box>
                <Box sx={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  maxWidth: '74%',
                  maxHeight: '54%',
                  top: '48%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}>
                  <video
                    src="/__videos/tv.m4v"
                    style={{ height: '100%', width: '100%' }}
                    autoPlay
                    playsInline
                    muted
                    loop
                  >

                  </video>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container alignItems="center" columnSpacing={12}>
            <Grid item xs={12} md={6} sx={{ order: {xs: 2, md: 1} }}>
              <Box sx={{ position: 'relative' }}>
                <Box>
                  <Image
                    src="/__images/mobile.jpg"
                    alt="Mobile"
                    width="640px"
                    height="480px"
                    layout="responsive"
                  />
                </Box>
                <Box sx={{
                  position: 'absolute',
                  bgcolor: 'common.black',
                  zIndex: 1,
                  border: `2px solid ${grey[700]}`,
                  borderRadius: 2,
                  p: 1,
                  width: {
                    xs: '80%',
                    sm: '70%',
                    md: '60%'
                  },
                  bottom: {
                    xs: '5%',
                    md: '10%'
                  },
                  left: '50%',
                  transform: 'translate(-50%, 0)'
                }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={2} md={3}>
                      <Image
                        src="/__images/boxshot.png"
                        alt="Boxshot"
                        width="55px"
                        height="80px"
                        layout="intrinsic"
                      />
                    </Grid>
                    <Grid item xs={8} md={6}>
                      <Typography>Stranger Things</Typography>
                      <Typography variant="body1" color={blue.A400}>
                        Men-download...
                      </Typography>
                    </Grid>
                    <Grid item xs={2} md={3}>
                      <Image
                        src="/__images/download.gif"
                        alt="Download"
                        width="50px"
                        height="50px"
                        layout="intrinsic"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: {xs: 1, md: 2} }}>
              <Title text="Download acara TV untuk menontonnya secara offline." />
              <Description text="Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang bisa ditonton." />
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container alignItems="center" columnSpacing={12}>
            <Grid item xs={12} md={6}>
              <Title text="Tonton di mana pun." />
              <Description text="Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu." />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Image
                    src="/__images/devices.png"
                    alt="Devices"
                    width="640px"
                    height="480px"
                    layout="responsive"
                  />
                </Box>
                <Box sx={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  maxWidth: '65%',
                  maxHeight: '49%',
                  top: '33%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}>
                  <video
                    src="/__videos/devices.m4v"
                    style={{ height: '100%', width: '100%' }}
                    autoPlay
                    playsInline
                    muted
                    loop
                  >

                  </video>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container alignItems="center" columnSpacing={12}>
            <Grid item xs={12} md={6} sx={{ order: {xs: 2, md: 1} }}>
              <Box>
                <Image
                  src="/__images/kids.png"
                  alt="Kids"
                  width="640px"
                  height="480px"
                  layout="responsive"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: {xs: 1, md: 2} }}>
              <Title text="Buat profil untuk anak." />
              <Description text="Kirim anak-anak untuk bertualang bersama karakter favorit mereka di dunia yang dibuat khusus untuk mereka—gratis dengan keanggotaanmu." />
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

    </Box>
)
}


import {Box, Container, Grid, Typography} from "@mui/material";
import Image from "next/image";
import {blue, grey} from "@mui/material/colors";

export default Features
