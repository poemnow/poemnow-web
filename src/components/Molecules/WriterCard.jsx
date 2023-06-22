import styled, {css} from "styled-components";
import H5 from "../Atoms/H5";
import Icon from "../Atoms/Icon";
import ProfileImage from "../Atoms/ProfileImage";
import Label from "../Atoms/Label";

const WriterCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HighlightedText = styled.span`
  color: #1F6313;
`;

const UserCardWriter = styled(H5)`
  ${props =>
    props.highlight &&
    css`
      ${HighlightedText} {
        color: #1F6313;
      }
    `}
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10%;
  gap: 16px;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

const HeartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 88px;
  gap: 3px;
`;

const AuthorContainer = styled.div`
  color: #9ca3af;
  font-size: 11px;
  height: 24px;
  line-height: 1.5;
`;

const WriterTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function WriterCard({ user,searchTerm }) {
  const userNickname = user.userNickname;
  const bio = user.bio;
  const followerCnt = user.followerCnt;

  const highlightText = (text, highlight) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <HighlightedText key={index}>{part}</HighlightedText>
      ) : (
        part
      )
    );
  };


  return (
    <WriterCardContainer>
      <ProfileContainer>
        <ProfileImage
          src="http://i.pinimg.com/564x/4d/0c/52/4d0c520e15ec37ca1c46a8ed8ed02990.jpg"
          alt="Profile image"
          size="40px"
        ></ProfileImage>

        <UserContainer>
          <WriterTopContainer>
            <UserCardWriter highlight={searchTerm}>{highlightText(userNickname, searchTerm)}</UserCardWriter>
            <HeartContainer>
              <Icon size="11px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height="0.7em"
                >
                  <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                </svg>
              </Icon>
              <Label color="#9CA3AF">{followerCnt}명</Label>
            </HeartContainer>
          </WriterTopContainer>
          <AuthorContainer>{bio}</AuthorContainer>
        </UserContainer>
      </ProfileContainer>
    </WriterCardContainer>
  );
}

export default WriterCard;
