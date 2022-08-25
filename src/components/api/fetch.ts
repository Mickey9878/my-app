export async function Fetch() {
    const url = "http://localhost:4000";
    const params = {method : "POST", body : JSON.stringify({'address' : "123fafa"})};
    
    const response = await fetch(url, params);
    console.log(response)
    const data = await response.json();
    console.log(data);
      
    // 外部のAPIからデータを取得
    // const addr = 'jfalsjdklajklsakjf'
    // const res = await fetch(`http://localhost:4000`, {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     address: 'falsjdklajklsakjf'
    //   })
    // })
    // const data = await res.json();
    // console.log({data});
    // const greet = data.greet;
    // const greet='hello'
    // propsを通してdataを渡す
    return { props: { data } };
}