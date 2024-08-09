// import styles from "./Profile.module.scss";
// import { useState , useEffect} from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-solid-svg-icons'


// const Profile = () => {
//     const [navbarUserIsLogged, setnavbarUserIsLogged] = useState(false);
//     useEffect(() => {
      
//       setnavbarUserIsLogged(true);
//     }, []);
  
//     return (
    
//     <>
//      {!navbarUserIsLogged ? (
//         <div className={styles.profile_1}>
//           <img alt="user" />
//           <div className="navbar-dropdown">
//             <a href="/login" className="navbar-item" id="item_login">
//               Login
//             </a>
//             <hr className="navbar-divider" />
//             <a href="/registro" className="navbar-item" id="item_register">
//               Registro
//             </a>
//           </div>
//         </div>
//       ) : (
//         <div className={styles.profile_2}>
//           <button className={styles.items_Button}> <div className={styles.icon}><FontAwesomeIcon icon={faUser} /></div> <div><span className={styles.reorder}>Sign In</span> <br />Account  </div></button>
//         </div>
//       )}
//     </>
//   )
// }

// export default Profile


import styles from "./Profile.module.scss";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    const [navbarUserIsLogged, setnavbarUserIsLogged] = useState(false);

    useEffect(() => {
        axios.get('/api/auth/check', { withCredentials: true })
            .then(response => {
                if (response.data.user) {
                    setnavbarUserIsLogged(true);
                }
            })
            .catch(error => {
                console.log('Not authenticated', error);
            });
    }, []);

    return (
        <>
            {!navbarUserIsLogged ? (
                <div className={styles.profile_1}>
                    <img alt="user" />
                    <div className="navbar-dropdown">
                        <a href="/login" className="navbar-item" id="item_login">
                            Login
                        </a>
                        <hr className="navbar-divider" />
                        <a href="/signup" className="navbar-item" id="item_register">
                            Registro
                        </a>
                    </div>
                </div>
            ) : (
                <div className={styles.profile_2}>
                    <button className={styles.items_Button}>
                        <div className={styles.icon}><FontAwesomeIcon icon={faUser} /></div>
                        <div><span className={styles.reorder}>Sign In</span><br />Account</div>
                    </button>
                </div>
            )}
        </>
    );
};

export default Profile;
