"use client"
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 5rem;
  }
  @media (min-width: 1024px) {
    padding: 8rem;
  }
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 2rem 0 1rem;
`;

const Text = styled.p`
  margin-bottom: 1rem;
`;

const AboutUs: React.FC = () => (
  <Container>
    <Title>Welcome to MigrAI</Title>
    <Text>
      MigrAI is a revolutionary software offering three powerful tools designed to assist individuals aspiring to
      immigrate to Canada. Our mission is to support and guide you through the complex immigration process, making it
      accessible and convenient for you 24/7, 7 days a week.
    </Text>

    <SubTitle>What We Do</SubTitle>
    <Text>
      MigrAI is specifically designed to help users with all their immigration-related queries and concerns. Whether
      you seek information about the intricate documentation requirements or the step-by-step processes involved, our
      platform is here to provide clarity and reliable answers. With the most popular tool, "Immigration Explainer,"
      you can find comprehensive responses to any immigration questions, ensuring you are well-informed every step of
      the way.
    </Text>

    <SubTitle>Our Approach</SubTitle>
    <Text>
      It's important to note that while MigrAI is an invaluable resource in understanding immigration processes and
      requirements, it is not intended to replace professional immigration services. We highly recommend consulting
      with accredited specialists and immigration agents for personalized and legally sound advice. Our aim is to
      equip you with knowledge and insights so you can navigate the immigration journey with confidence.
    </Text>

    <SubTitle>The Power of MigrAI</SubTitle>
    <Text>
      Through our three advanced tools, we empower you to take control of your immigration process. The "Immigration
      Process Simulator" allows you to simulate and optimize your entire immigration journey, guiding you from start to
      finish. Ask questions, seek advice, and gain a comprehensive understanding of your application's progress before
      embarking on the real process.
    </Text>
    <Text>
      The "Interview Simulation with an Immigration Agent" ensures you are well-prepared for crucial interactions.
      With the help of artificial intelligence, practice your interview skills, and receive valuable feedback to enhance
      your chances of success.
    </Text>

    <SubTitle>Your Peace of Mind</SubTitle>
    <Text>
      At MigrAI, we understand that immigration decisions can be daunting and time-consuming. With our software, you
      can find peace of mind, knowing that prompt and accurate answers to your queries are just a click away. Empower
      yourself with knowledge and embark on your immigration journey with confidence.
    </Text>

    <Text>
      Join MigrAI today, and let us be your trusted companion in your pursuit of a new life in Canada. Welcome to a
      brighter future with MigrAI!
    </Text>
  </Container>
);

export default AboutUs;
