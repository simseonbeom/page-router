/* 
[id] : dynamic route
[...id] : catch-all segments
[[...id]] : optional catch-all segments
*/

import { useRouter } from "next/router"

function Page() {

  const router = useRouter();

  console.log(router);
  

  return (
    <div>Page</div>
  )
}
export default Page