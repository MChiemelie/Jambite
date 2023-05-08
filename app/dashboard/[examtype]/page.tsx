export default function Page ({ params }: {
 params: { type: string }
}){
 return(
  <>
  <h1> Exam Type: {params.type}</h1>
  </>
 ) 
}