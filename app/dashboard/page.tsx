import { env } from 'process';

async function getData() {
  const res = await fetch("https://questions.aloc.com.ng/api/v2/m?subject=chemistry", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'AccessToken': env.API_TOKEN as string,
    },
    method: "GET"
  });

  return res.json();
}
 
export default async function Page () {
  const data = await getData();
 
  return (
    <>
    <p>{JSON.stringify(data)}</p>
    </>
  );
}