import PropTypes from 'prop-types'
import Image from 'next/image'
import styled from '@emotion/styled'

const StyledImage = styled(Image)`
  z-index: -1;
`
const a

const BgImage = ({ src, alt }) => (
  <StyledImage
    src={src}
    alt={alt}
    layout="fill"
    objectFit="cover"
    quality={100}
  />
)

BgImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default BgImage
