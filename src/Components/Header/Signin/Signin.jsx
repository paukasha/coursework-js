import React from "react";
import styles from './signin.m.css';



// global.fetch = fetch;
// URL = require('url').URL;
// let urlAuth = `https://unsplash.com/oauth/authorize?client_id=avGYLy8xj-R8I3tiRSkeVZvRV0R39Ws34mZod3qn3Zo&redirect_uri=http://localhost:3000/&response_type=code&scope=public+read_user+write_user+read_photos+write_likes`;
//  // sendPromise();
//
// function setOutButton() {
//   if (window.token) {
//     const newButton = document.querySelector('.loginLink').textContent = 'Выйти';
//     console.log(newButton)
//     store.dispatch(setButtonOut(newButton))
//   }
// }


export default function Signin() {
  return (
    <div className={styles.login}>
      <svg className={styles.loginIcon} height="512pt" viewBox="0 0 512 512" width="512pt"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="m403.777344 147.917969c0-81.5625-66.359375-147.917969-147.917969-147.917969-81.5625 0-147.917969 66.355469-147.917969 147.917969 0 50.519531 25.464844 95.199219 64.222656 121.894531-36.1875 12.488281-69.359374 33.117188-97.226562 60.984375-48.324219 48.324219-74.9375 112.578125-74.9375 180.917969h39.976562c0-119.035156 96.84375-215.878906 215.882813-215.878906 81.558594 0 147.917969-66.355469 147.917969-147.917969zm-147.917969 107.941406c-59.519531 0-107.941406-48.421875-107.941406-107.941406s48.421875-107.941407 107.941406-107.941407c59.515625 0 107.9375 48.421876 107.9375 107.941407s-48.421875 107.941406-107.9375 107.941406zm256.140625 111.9375-94.089844 94.089844-28.269531-28.269531 46.832031-46.832032h-34.671875c-47.898437 0-86.902343 38.972656-86.941406 86.871094l-.035156 38.074219-39.976563-.03125.03125-38.078125c.058594-69.925782 56.996094-126.816406 126.921875-126.816406h32.671875l-44.832031-44.832032 28.269531-28.265625zm0 0"/>
      </svg>
      <button className={styles.loginSignin} >Войти
         {/*<a href={redirectToUnsplashOauth}>Войти</a>*/}
      </button>
    </div>
  )
}

// {/*<a href={urlAuth}*/}
// {/*   onClick={sendPromise()}>Войти</a> */}

