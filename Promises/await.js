const fetch = async () => {
  try {
    let users = 'users'
    const response = await axios({
      url:`https://jsonplaceholder.typicode.com/${users}`,
      method:'GET',
    });
    return response
  }catch(error){
    return error
  }
};

(async  () => {
  const data = await fetch();
  console.log(data.data[0].name)
})()
