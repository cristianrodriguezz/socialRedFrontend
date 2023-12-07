import Post from "./Post"


const ListPosts = ( {user} ) => {


  return (
    <ul id="images" className="2xl:px-[40rem] sm:px-1 xl:px-[20rem] lg:px-60 md:px-36 xs:px-24  items-center justify-center grid gap-5 ">
    {user.map( user => 
      <Post user={user} key={user.id}/>
    )}
  </ul>
  )
}

export default ListPosts