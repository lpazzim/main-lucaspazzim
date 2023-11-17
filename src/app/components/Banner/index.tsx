import Image from "next/image";
import styled from "styled-components";

import profilePicture from "@/images/profile-pic.png";
import { Button } from "@/components/Button";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: center;
  padding: 4rem 0 4rem 7.75rem;
`;

const Role = styled.div`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin: 0;
`;

const TitleName = styled(Title)`
  color: var(--Red, #fc3314);
`;

const PersonalDescription = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  max-width: 455px;
`;

const ImageContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Banner = () => {
  return (
    <Container>
      <DescriptionContainer>
        <Role>{`Frontend Engineer`}</Role>
        <Title>{`Hi there, I'm`}</Title>
        <TitleName>{`Lucas Pazzim`}</TitleName>
        <PersonalDescription>
          {`Welcome to my portfolio of captivating digital experiences. Explore my
          work and let's create something extraordinary together.`}
        </PersonalDescription>
        <Button>{`Hire me`}</Button>
        <Button>{`Portfolio`}</Button>
      </DescriptionContainer>
      <ImageContainer>
        <Image
          src={profilePicture}
          alt="profile-picture"
          width={200}
          height={200}
        />
      </ImageContainer>
    </Container>
  );
};
