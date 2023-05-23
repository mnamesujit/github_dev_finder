
const URL = "https://api.github.com/users";
const btn = document.querySelector("#search-btn");

const themeMode = document.querySelector("#btn-mode");
const body = document.querySelector('body');

const userContainer = document.querySelector('#user-container')


const userAvatar = document.querySelector("#user-image");
const userFullName = document.querySelector("#user-full-name");
const gitHubUserName = document.querySelector("#username");
const visitProfile = document.querySelector("#visit");
const bio = document.querySelector("#bio");
const repoCount = document.querySelector("#repo-count");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");
const userLocation = document.querySelector("#location");
const website = document.querySelector("#website");
const twitter = document.querySelector("#twitter");
const company = document.querySelector("#company");
const email = document.querySelector("#email");

const updateInfo = (data) => {
  userAvatar.src = `${data.avatar_url}`;
  userFullName.innerText = `${data.name}`;
  gitHubUserName.innerText = `@${data.login}`;
  visitProfile.href = `${data.html_url}`;
  bio.innerText = data.bio ? `${data.bio}` : `There is no bio of ${data.name}`;
  repoCount.innerText = `${data.public_repos}`;
  followers.innerText = `${data.followers}`;
  following.innerText = `${data.following}`;
  userLocation.innerText = data.location ? `${data.location}` : "not-mentioned";
  website.innerText = data.blog ? `${data.blog}` : "no-blog";
  twitter.innerText = data.twitter_username ? `@${data.twitter_username}` : "no-username";
  company.innerText = data.company ? `${data.company}` : "no-company";
  email.innerText  = data.email ? `${data.email}` : "no-email"
};


btn.addEventListener("click", (e) => {
  const userInput = document.querySelector("#user-input").value;
  githubData(userInput);
});

const githubData = async (userInput) => {
    try {
      const res = await fetch(`${URL}/${userInput}`)
      const data = await res.json()
      if(data.login){
        updateInfo(data);
        userContainer.classList.remove("hidden")

      }
      else{
        userContainer.classList.add("hidden")
        alert("Username Not Found")
      }
    }catch (err){
      console.log(err)
    }
  };
  
