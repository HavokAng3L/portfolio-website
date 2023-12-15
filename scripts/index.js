const GITHUB_USER_URL = "https://api.github.com/users/HavokAng3L";

// Remember, data must be parsed
fetch(GITHUB_USER_URL).then(res=>{return res.json()}).then(res=>console.log(res))