import type { GetServerSideProps, NextPage } from 'next'
import React, {Component, useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Text } from '@chakra-ui/react'
import getProps from '../src/components/api/fetch';

const Home: NextPage=  () => {

  return(
    <div>
      <Button onClick={getProps}>greet</Button>
    </div>
  );
}

export default Home;
