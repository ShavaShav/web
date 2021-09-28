import styled from "styled-components";

type ProfileProps = {
  headerRoom: number
}

const ProfileWrapper = styled.div<ProfileProps>`
  background-color: ${({theme}) => theme.profile};
  padding-top: ${({headerRoom}) => headerRoom};
  height: ${({headerRoom}) => `calc(100vh - ${headerRoom}px)`};
  width: '100%';
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  transition: background-color 0.50s linear;
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

const Profile = (props: ProfileProps) => {
  return (
    <ProfileWrapper {...props}>
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