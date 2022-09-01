import fetch from 'isomorphic-unfetch'


// export interface Score {
//   traderScore: number,
//   diamondHand: number
// }

const getProps = async (account: string | null | undefined ) => {
    const url = "http://localhost:4000/address";
    console.log(account)
  
    const response = await fetch(url, {
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({address: account}),
    })
    const scores = await response.json();
    return {
      props: {
        scores,
      },
    }
}

export default getProps