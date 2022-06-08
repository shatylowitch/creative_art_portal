function AboutYou({ profile }) {
  console.log(profile);
  return (
    <div className="container text-center mg-5">
      {profile && (
        <>
          <h2 class="section-heading Greeting my-5">
            Welcome back {profile.email}!
          </h2>
        </>
      )}
    </div>
  );
}

export default AboutYou;
