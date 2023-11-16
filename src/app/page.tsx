"use client";

import styled from "styled-components";
import { montSerrat } from "./fonts";

const Title = styled.h1``;

export default function Home() {
  return (
    <main className={montSerrat.className}>
      <Title>Lucas Pazzim</Title>
    </main>
  );
}
