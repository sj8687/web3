import { useQuery, useQueryClient } from "@tanstack/react-query"
import getData from "../fetch";

export default function Tood() {
//    const queryclient = useQueryClient();

   const { data, isLoading, error } = useQuery({
  queryKey: ["todos"],
  queryFn: getData,
  refetchInterval: 10 * 1000,
})


   if(isLoading) return <p>Loading...</p>
   if(error) return <p>Something went wrong...</p>

   
   return (
  <div>
    <ul>
      {data?.map((todo) => (
        <li key={todo.id}>
          {todo.id} - {todo.title}
        </li>
      ))}
    </ul>
  </div>
)

}