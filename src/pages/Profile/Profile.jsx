import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useCurrentUser from "../../hooks/useCurrentUser";

const Profile = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("Hello,");
  const currentUser = useCurrentUser();

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setWelcomeMessage("Good Morning,");
    } else if (hours < 18) {
      setWelcomeMessage("Good Afternoon,");
    } else {
      setWelcomeMessage("Good Evening,");
    }
  }, []);

  console.log(welcomeMessage, currentUser?.name)

  return (
    <>
      <Helmet>
        <title>DocHub - My Profile</title>
      </Helmet>
      <section>
        <div>
            
        </div>
      </section>
    </>
  );
};

export default Profile;
