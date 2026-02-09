export default async function getData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await data.json();
    console.log(response);
    return response;
}