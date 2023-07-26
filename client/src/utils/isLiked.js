// const isLiked = (event) => {
//     const user = JSON.parse(sessionStorage.getItem('user'));
//     const userId = user._id;

//     return event.likes.includes(userId);
// }
const isLiked = (event) => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  if (user && user._id) {
    return event.likes.includes(user._id);
  }
  return false;
};

export default isLiked;