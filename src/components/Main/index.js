import PropTypes from 'prop-types'
import { Box, Container, Grid, Typography } from '@mui/material'

import BgImage from 'components/BgImage'

const Main = ({
  title = 'Boilerplate',
  description = 'A starter template to work with Next.js and MUI'
}) => (
  <>
    <BgImage
      alt="Anonymous developer"
      src="/coding.jpg"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
    <Box mt={6} mb={6}>
      <Container component="main" maxWidth="md">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ color: 'white' }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            {title}
          </Typography>
          <Typography component="h2">{description}</Typography>
        </Grid>
      </Container>
    </Box>
  </>
)

Main.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default Main
