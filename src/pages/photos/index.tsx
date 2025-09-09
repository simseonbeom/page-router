
import fetchPhotos from "@/utils/fetchPhotos";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head"
import Image from "next/image"


export const getServerSideProps = async () => {
  
  const data = await fetchPhotos();

  return {
    props:{
      data
    }
  }
}

function Page({data}:InferGetServerSidePropsType<typeof getServerSideProps>) {

  
  return (
    <>
      <Head>
        <title>Triangle | Photos</title>
      </Head>
      <h1>Photos Page</h1>
      <ul>
        {
          data.map(({id,author,download_url}) => (
            <li key={id}>
              <Image src={download_url} alt={author} width={300} height={200} style={{width:'auto',height:'auto'}}/>
              <span>작가 : {author}</span>
            </li>
          ))
        }
      </ul>
    </>
  )
} 
export default Page