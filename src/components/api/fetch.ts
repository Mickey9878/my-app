import fetch from 'isomorphic-unfetch'

const getProps = async () => {
    const url = "http://localhost:4000/address";
  
    const response = await fetch(url, {
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({query: "query"}),
    })
    const data = await response.json();
    console.log(data);
    return { props: { data } }
  
}

export default getProps