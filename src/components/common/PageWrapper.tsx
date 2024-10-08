import { Container } from '@mui/material';
import React, { Component, ReactElement, ReactNode } from 'react'

interface PageWrapperProps {
    children: ReactNode;
  }

function PageWrapper({children}: PageWrapperProps) {
  return (
    <Container>{children}</Container>
  )
}

export default PageWrapper