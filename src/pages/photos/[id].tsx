/* 
[id] : dynamic route
[...id] : catch-all segments
[[...id]] : optional catch-all segments
*/

import { useRouter } from "next/router"

function Page() {

  const router = useRouter();

  const query = router.query.id;
  

  return (
    <div>Page {query} </div>
  )
}
export default Page