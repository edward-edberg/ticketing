import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);

  return <h1>{currentUser ? "You're signed in" : "You are not signed in"}</h1>;
};

LandingPage.getInitialProps = async (context) => {
  console.log("LANDING PAGE");
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};

export default LandingPage;
