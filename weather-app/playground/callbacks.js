let getUser = (id, callback) => {
  let user = {
    id: 31,
    name: 'Dhruv',
  };
  setTimeout(() => {
    callback(user);
  }, 3000)
};

getUser(31, (userObjet) => {
  console.log(userObjet);
});
