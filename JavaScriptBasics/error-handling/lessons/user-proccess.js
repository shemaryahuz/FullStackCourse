// User data proccess

function proccessUserData(users, index){
    try{
        const usersObj = JSON.parse(users); 
        const user = usersObj[index];
        console.log(user["username"]).toUpperCase();
    }
    catch(err){
        console.error(err.message)
    }
}

const usersStr = `[
  {
    "username": "John Doe"
  },
  {
    "username": "Jane Smith",
  },
  {
    "username": "Mike Wilson",
  },
  {
    "username": "Sarah Jones"
  },
  {
    "username": "Alex Brown"
  },
  {
    "username": "emma_davis"
  },
  {
    "username": "Ryan Miller"
  },
  {
    "username": "Lisa Garcia"
  }
]`

proccessUserData(usersStr, 1);