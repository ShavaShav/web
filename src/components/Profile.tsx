import styled from "styled-components";

const ProfileWrapper = styled.div`
  background-color: ${({theme}) => theme.profile};
  height: 100vh;
  width: '100%';
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`

const Logo = styled.img`
  height: 150px;
`

const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileSection>
        <Logo alt="Zach Shaver" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original-wordmark.svg" />
        <div>
          <h1>Zach Shaver</h1>
          <h2>Software Developer</h2>
        </div>
      </ProfileSection>
    </ProfileWrapper>
  );
}

export default Profile;