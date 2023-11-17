"use client";

import styled from "styled-components";
import { montSerrat } from "./fonts";
import { Banner } from "@/components/Banner";

const HeaderContainer = styled.div`
  width: 100%;
`;

export default function Home() {
  return (
    <main className={montSerrat.className}>
      <HeaderContainer>
        <Banner />
      </HeaderContainer>
    </main>
  );
}
