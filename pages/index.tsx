import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Text } from '@chakra-ui/react'
import fetch from "isomorphic-fetch";


const Home: NextPage= ({}:any) => {
  return(
    <Button onClick={Fetch}>greet</Button>
  );
}

export async function Fetch() {
  // try {
    const url = "http://localhost:4000/address";
    // const params: any = {
    //   method: "POST",
    //   body: "fsjljfklsakla"
    //   // body: JSON.stringify({address : "123fafa"}),
    //   // headers: {
    //   // 'Content-Type': 'application/json'},
    // };

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ query: "query" }),
    });
    const { data } = await response.json();
    return data;
    
    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(data);
    // return { props: { data } };
  // } catch (error) {
  //   console.log('error')
  // }
}

export default Home;

