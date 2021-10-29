import { Box } from '@mui/material'
import PropTypes from 'prop-types'

const Base = ({ children }) => (
  <Box
    display="flex"
    flexDirection="column"
    minHeight="100vh"
    position="relative"
  >
    {children}
  </Box>
)

Base.propTypes = {
  children: PropTypes.node.isRequired
}

export default Base
