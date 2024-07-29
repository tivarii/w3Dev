// // UsersWithUseQuery.jsx
// import React from 'react';
// import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';

// // Create a client
// const queryClient = new QueryClient();

// const fetchUsers = async () => {
//   const response = await fetch('some url');
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };

// const UsersWithUseQuery = () => {
//   const { data, error, isLoading } = useQuery(['users'], fetchUsers);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h2>Users List</h2>
//       <ul>
//         {data.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <UsersWithUseQuery />
//   </QueryClientProvider>
// );

// export default App;







// // PaginatedUsers.jsx
// import React, { useState } from 'react';
// import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient();

// const fetchUsers = async (page) => {
//   const response = await fetch(`some url`);
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };

// const PaginatedUsers = () => {
//   const [page, setPage] = useState(1);

//   const { data, error, isLoading, isFetching } = useQuery(['users', page], () => fetchUsers(page), {
//     keepPreviousData: true,
//   });

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h2>Users List (Page {page})</h2>
//       <ul>
//         {data.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//       <div>
//         <button onClick={() => setPage((old) => Math.max(old - 1, 1))} disabled={page === 1}>
//           Previous Page
//         </button>
//         <button onClick={() => setPage((old) => old + 1)} disabled={isFetching}>
//           Next Page
//         </button>
//         {isFetching ? <span> Loading...</span> : null}
//       </div>
//     </div>
//   );
// };

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <PaginatedUsers />
//   </QueryClientProvider>
// );

// export default App;


// DependentQueries.jsx
// import React from 'react';
// import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient();

// const fetchUser = async (userId) => {
//   const response = await fetch(`some url`);
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };

// const fetchUserPosts = async (userId) => {
//   const response = await fetch(`some url`);
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };

// const DependentQueries = ({ userId }) => {
//   const { data: user, error: userError, isLoading: userLoading } = useQuery(['user', userId], () => fetchUser(userId));

//   const userId = user?.id;

//   const { data: posts, error: postsError, isLoading: postsLoading } = useQuery(['posts', userId], () => fetchUserPosts(userId), {
//     enabled: !!userId, // Only run this query if userId is available
//   });

//   if (userLoading || postsLoading) return <div>Loading...</div>;
//   if (userError) return <div>Error: {userError.message}</div>;
//   if (postsError) return <div>Error: {postsError.message}</div>;

//   return (
//     <div>
//       <h2>{user.name}'s Posts</h2>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <DependentQueries userId={1} />
//   </QueryClientProvider>
// );

// export default App;
