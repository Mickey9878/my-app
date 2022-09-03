import type { GetServerSideProps, NextPage } from 'next'
import React, {Component, useState, createContext} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Button, Container, Flex, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react'
import getProps from '../src/components/api/fetch';
import walletModal from '../src/components/header/walletModal';
import SideNav from '../src/components/sideBar/SideNav';
import Header from '../src/components/header/header';
import { Stat } from '../src/components/main/card/stat';

export const ScoreContext = createContext(
  {
      tradeScore: 0,
      diamondHand: 0,
  });


const Home: NextPage=  () => {
  const[score, setScore] =useState();
  const value: any = {
    score,
    setScore
  }
  const stats = [
    { label: 'Total Subscribers', value: '71,887' },
    { label: 'Avg. Open Rate', value: '56.87%' },
    { label: 'Avg. Click Rate', value: '12.87%' },
  ]
  
  return(
    <ScoreContext.Provider value = {value}>

    <Grid
      templateAreas={`"header header"
      "nav main"`}
      gridTemplateRows={'50px 1fr'}
      gridTemplateColumns={'285px 1fr'}
      minHeight='100vh'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' bg='orange.300' area={'header'}>
        <Header/>
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'nav'}>
      <SideNav></SideNav>
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'}>
          <Text>{score}</Text>
        <Box as="section" width='70%' display="flex" alignItems="center" justifyContent="space-between">
              {stats.map(({ label, value }) => (
                <Stat key={label} label={label} value={value} />
                ))}
        </Box>
      </GridItem>
    </Grid>
  </ScoreContext.Provider>
  );
}

export default Home;
