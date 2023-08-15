import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title> Login | Escalafón </title>
      </Helmet>

      <StyledRoot>
        {/* <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        /> */}

        {mdUp && (
          <StyledSection sx={{ px: 5, mt: 10, mb: 5 , ml: 5 }}>
            <Typography variant="h3">
              Hola, Bienvenidos al sistema de Escalafón
            </Typography>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQOkIB-70hlhF7DNq9cZ3b-9Pg2xcyJysf5Zi2sMX5TmFN8LWSjs7fsuO_CfSCDAwkix0qiKiVSDjydKHLou5mRs4DgMKAmR21h8B973WbE4q_CtI8enlZpQQq2w6ARx1zJ25D7PapGM2ReLHHtXflbMnQBP8yJB8ySnQWr1FHiwMyEuiSDbIW6Oqxfg/s1600/TEMARIO%20DE%20ADMISION%20UNIVERSIDAD%20NACIONAL%20JOSE%20FAUSTINO%20SANCHEZ%20CARRION%20DE%20HUACHO%20CUESTIONARIO%20DEL%20PROSPECTO%20UNJFSC%20DE%20EXAMEN%20INGRESO%20GUIA%20PARA%20LA%20PRUEBA%20TEMAS%20A%20EVALUAR%20CURSOS%20DESCARGA%20WORD%20PDF.png" alt="login" width={250}  />
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Iniciar Sesión
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Ingresa con facebook o gmail  {''}
             {/* <Link variant="subtitle2">ss</Link>  */}
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
              </Button>
            </Stack>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                O
              </Typography>
            </Divider>

            <LoginForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
