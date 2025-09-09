import { useEffect } from "react";


export default function Home() {
  
  useEffect(()=>{
    console.log(new Date());
  })
  
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
