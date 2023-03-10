import Container from "./components/Container";

const App = () => {
  return (
    <>
      <Container
        width="100%"
        height="50px"
        justify="space-between"
        align="center"
        padding="0 25px"
        text="Blog name"
        blockAmount={4}
        blockWidth="46px"
        blockHeight="37px"
        blockGap="20px"
        blockBackgroundColor="#E7EFD6"
        isLogo={true}
      />
      <Container
        width="100%"
        height="145px"
        justify="center"
        align="center"
        text="Full-width banner image"
      />
      <div className="blog-container">
        <Container
          width="65%"
          direction="column"
          gap="15px"
          padding="20px 25px 30px 25px"
          text="Blog"
          blockAmount={4}
          blockWidth="100%"
          blockHeight="70px"
          blockDirection="column"
          blockGap="30px"
          blockBackgroundColor="#F9D7D7"
        />
        <Container
          width="35%"
          direction="column"
          gap="15px"
          padding="20px 25px 30px 25px"
          text="News"
          blockAmount={3}
          blockWidth="100%"
          blockHeight="110px"
          blockDirection="column"
          blockGap="10px"
          blockBackgroundColor="#BDCDF7"
        />
      </div>
    </>
  );
};

export default App;
