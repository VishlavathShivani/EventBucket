// const isAdmin = (event) => {
//     const userId = JSON.parse(sessionStorage.getItem('user'))._id;
// // const userId ='6457a2d965c8b91f40551d07';
//     return event.admin._id === userId;
// }

// export default isAdmin;
const isAdmin = (event) => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  if (user && user._id) {
    return event.admin._id === user._id;
  }
  return false;
};
export default isAdmin;