import React from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss"
const Authentication = () => {
  // sign in with google redirect
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getRedirectResult(auth);
  //     if(response){
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   fetchData();
  // }, []);

 

  return (
    <div className="authentication-container">
      <SignInForm/>
      <SignUpForm/>     
    </div>
  );
};

export default Authentication;
