import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const userNames = ["Atharv Kachare", "Omkar Jadhav", "Shreyas Koulge"];
  // const userData = [
  //   {
  //     name:"Atharv Kachare",
  //     age:'22',
  //     email:'atharvkachare@gmail.com',
  //     id:'1'
  //   },
  //   {
  //     name:'Omkar Jadhav',
  //     age:'23',
  //     email:'omkaer@gmail.com',
  //     id:'2'
  //   },
  //   {
  //     name:'Shreyas Koulge',
  //     age:'23',
  //     email:'shreyaskoulge@gmail.com',
  //     id:'3'
  //   }
  // ]
  // return (
  //   <div>
  //     <h1>Loopin JSX with Map function</h1>
  //     <table border="1">
  //       <thead>
  //         <tr>
  //           <td>ID</td>
  //           <td>Name</td>
  //           <td>Email</td>
  //           <td>Age</td>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {
  //           userData.map((user)=>(
  //             <tr key={user.id}>
  //           <td>{user.id}</td>
  //           <td>{user.name}</td>
  //           <td>{user.email}</td>
  //           <td>{user.age}</td>
  //         </tr>
  //           ))
  //         }
  //       </tbody>
  //     </table>
  //     <h1>Dummy Data</h1>
  //     <table border='1'>
  //       <thead>
  //       <tr>
  //         <td>ID</td>
  //         <td>Name</td>
  //         <td>Email</td>
  //         <td>Age</td>
  //       </tr>
  //       </thead>
  //       <tbody>
  //       <tr>
  //         <td>1</td>
  //         <td>Atharv</td>
  //         <td>Atharvkachare@gmail.com</td>
  //         <td>22</td>
  //       </tr>
  //       <tr>
  //         <td>1</td>
  //         <td>Atharv</td>
  //         <td>Atharvkachare@gmail.com</td>
  //         <td>22</td>
  //       </tr>
  //       <tr>
  //         <td>1</td>
  //         <td>Atharv</td>
  //         <td>Atharvkachare@gmail.com</td>
  //         <td>22</td>
  //       </tr>
  //       <tr>
  //         <td>1</td>
  //         <td>Atharv</td>
  //         <td>Atharvkachare@gmail.com</td>
  //         <td>22</td>
  //       </tr>
  //       <tr>
  //         <td>1</td>
  //         <td>Atharv</td>
  //         <td>Atharvkachare@gmail.com</td>
  //         <td>22</td>
  //       </tr>
  //       </tbody>
  //     </table>
   // </div>
 // )

//  const userData=[
//   {
//     id:"1",
//     name: "Atharv Kchare",
//     email:"atharvkachare9@gmail.com",
//     age:"23"
//   },
//   {
//     id:"2",
//     name:"Omaker Jadhav",
//     email:"omkarjadhav2@gmail.com",
//     age:"22",
//   },
//   {
//     id:"3",
//     name:"Shreyas Koulge",
//     email:"shreyas123@gmail.com",
//     age:"22"
//   }
//  ]

//  return(
//   <div>
//     <h1>Loop In JSX with Map Function </h1>
//     <table border="1">
//       <thead>
//         <tr>
//           <td>ID</td>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Age</td>
//         </tr>
//       </thead>
//       <tbody>
//         {
//           userData.map((user)=>(
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.age}</td>
//             </tr>
//           ))
//         }

//       </tbody>
//     </table>

//   </div>
//  )

// const userData=[
//   {
//     id:"1",
//     name:"Athatv Kachare",
//     age:"22",
//     email:"atharvkachare23@gmailcom"
//   },
//   {
//     id:"2",
//     name:"Omkar Jadhav",
//     age:"23",
//     email:"oj123@gmail.com"
//   },
//   {
//     id:"3",
//     name:"shreyas Koulge",
//     age:"23",
//     email:"shreyaskoulge123@gmail.com"
//   }

// ]

// return(
//   <div>
//     <h1>Loop And Map Function</h1>
//     <table border="1">
//       <thead>
//         <tr>
//           <td>id</td>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Age</td>
//         </tr>
//       </thead>
//       <tbody>
//         {
//           userData.map((user)=>(
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.age}</td>
//             </tr>
//           ))
//         }
//       </tbody>
//     </table>
//   </div>
// )

// const userData=[{
//   id:"1",
//   name:"Atharv Kachare",
//   email:"atharvkachare9@gmail.com",
//   age:"22"
// },
// {
//   id:"2",
//   name:"Omkar jadhav",
//   email:"omkar2@gmail.com",
//   age:"22"
// },
// {
//   id:"3",
//   name:"Shreyas Koulge",
//   email:"shreyashKoulge34@gmail.com",
//   age:"22"
// }
// ]

// return(
//   <div>
//     <h1>Loop With Map function</h1>
//     <table border="1">
//       <thead>
//         <td>ID</td>
//         <td>Name</td>
//         <td>Email</td>
//         <td>Age</td>
//       </thead>
//       <tbody>
//         {
//           userData.map((user)=>(
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.age}</td>
//             </tr>
//           ))
//         }
//       </tbody>
//     </table>
 // </div>
//)
// const userName =["Atharv Kachare", "Omkar Jadhav", "Shreyas Koulge"]
// const userData =[
//       {
//         name:"Athrv Kachare",
//         age:"21",
//         email:"atharvkachare9@gmail.com",
//         id:"1"
//       },
//       {
//         name:"Omkar Jadhav",
//         age:"21",
//         email:"oj2@gmail.com",
//         id:"2"
//       },
//       {
//         name:"Shreyas Koulge",
//         age:"21",
//         email:"shreyashkoulge2@gmail.com",
//         id:"3"
//       }
//     ]

    return(
      <div>
        {/* <h1>Looping JSX with Map Function</h1>
        <table border="1">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Age</td>
            </tr>
          </thead>
          <tbody>
            {
              userData.map((user)=>(
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                </tr>
              ))
            }
          </tbody>
        </table> */}
        
      </div>
    )
}


export default App
