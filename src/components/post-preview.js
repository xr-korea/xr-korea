import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import moment from 'moment';
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  background-color: ${props => props.color};
  min-height: 20rem;
  @media (min-width: 650px) {
    height: 28rem;
  > * {
    overflow: hidden;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const ImageItem = styled.div`
  flex: 0 0 55%;
`;

const TextItem = styled.div`
  flex: 1 0 35%;
  padding: 1rem;
  font-weight: bold;
`;

const DateItem = styled.div`
  flex: 0 0 10%;
  line-height: 2rem;
  background-color: ${props => props.color};
  font-weight: bold;
  padding: 0.5rem 1rem;
`;

const CoverImage = styled(Img)`
  height: 100%;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  line-height: 1.2em;
`;

const Description = styled.div``;


const formatDT = (dt) => moment(dt).local().format(`YYYY년 MM월 DD일`);

export default ({post, primaryColor, secondaryColor}) => (
  <Container color={primaryColor}>
    <ImageItem>
      <StyledLink to={`/post/${post.slug}`} c>
        <CoverImage alt="" fluid={post.heroImage.fluid} />
      </StyledLink>
    </ImageItem>
    <TextItem>
      <Title>
        <StyledLink to={`/post/${post.slug}`}>{post.title}</StyledLink>
      </Title>
      <Description
        dangerouslySetInnerHTML={{
          __html: post.description.childMarkdownRemark.html,
        }}
      />
    </TextItem>
    <DateItem color={secondaryColor}>{formatDT(post.publishDate)}</DateItem>
  </Container>
);
