"use client"
import styles from "@/app/ui/login/login.module.css"
const LoginPage = () => {
  const SendData = () => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "username": "Team3",
      "password": "2024"
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    // setSpinner(!Spinner);
fetch("https://api-rest-a-sante.pretty-rattlesnake-77.telebit.io/api/v1/connect", requestOptions)
      .then(response => response.json())
      .then(result => console.log("my dataaa", result))
      .catch((error) => console.error(error));
      // .then(result => {
      //   setSpinner(!Spinner);
      //   if (result.statuscode == 200) {
      //     setSpinner(false);
      //     navigation.navigate('Home', {
      //       data: result,
      //     });
      //     console.log(result)
      //     setSpinner(false);
      //   } else {
      //     setSpinner(false);
      //     Alert.alert(
      //       'Identifiants incorrects',
      //       'Nom d’utilisateur ou mot de passe incorrect',
      //     );
      //   }
      //   console.log('Patience');
      // })

      // .catch(error => {
      //   setSpinner(false);
      //   console.error(error);
      //   Alert.alert(
      //     'Identifiants incorrects',
      //     'Veulliez vérifié votre nom d’utilisateur ou mot de passe',
      //   );
      //   setSpinner(false);
      // })
      // .finally(() => )


  };

  const GetUserData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + data.data);
  
    const raw = "";
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
  
    fetch("https://api-rest-a-sante-core.pretty-rattlesnake-77.telebit.io/api/v1/patients/"+myData?.data.access.utilisateurid, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      setUserData(result.data)
      console.log(userData)
    })
    .catch((error) => console.error(error));
  };
    return (
      <div className={styles.container}>
        <form action="" className={styles.form}>
          <h1>Connexion</h1>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password"/>
          <button onClick={SendData()}> <a href="">Login</a></button>
        </form>
      </div>
    )
  }
  
  export default LoginPage