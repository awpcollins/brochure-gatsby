import PropTypes from "prop-types"
import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import Button from './button';

const TextBox = styled.div`
		transform: translate(0, 60%);
		text-align: center;
		text-shadow: 0 0 10px hsla(0, 0%, 0%, 0.9);
`

const HeadingPrimary = styled.h1`
  color: #fff;
  text-transform: uppercase;
  backface-visibility: hidden;
  margin-bottom: 3rem;
`
const HeadingPrimaryMain = styled.span`
  display: block;
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 1.5rem;
  animation: moveDown 2s;
`
const HeadingPrimarySub = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1rem;
  text-align: center;
  animation: moveRight 1.5s ease-out;
`

const BackgroundSection = ({ siteTitle, className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "niilio-encoded-87-1800.webp" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 6000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}

    render={data => {
      const imageData = data.desktop.childImageSharp.fluid

      return (
        <BackgroundImage Tag="header" fluid={imageData} className={className}>
          <TextBox>
            <HeadingPrimary>
              <HeadingPrimaryMain>Missing</HeadingPrimaryMain>
              <HeadingPrimarySub>Get lost with us</HeadingPrimarySub>
            </HeadingPrimary>
            <Button className="btn btn--white btn--animated">
              Book Now
            </Button>
          </TextBox>
         // </BackgroundImage>
      )
    }}
  />
)

const Header = styled(BackgroundSection)`
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 65vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 65vh, 0 100%);
		/* background-position: top; */
		height: 75vh;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
