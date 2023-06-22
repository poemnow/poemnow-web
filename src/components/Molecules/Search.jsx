import styled from "styled-components";
import Icon from "../Atoms/Icon";

const SearchStyle = styled.div`
  /* outline: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const InputStyle = styled.input`
  width: 90vw;
  /* height: 90%; */
  /* background: blue; */
  border: none;
  outline: none;
  text-indent: 2px;
  margin-left: 8px;
  font-size: var(--mobile--H5);
  font-weight: bold;
  color: var(--primary);
`;

const SearchContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid black;

`;

// const [value, setValue] = useState('');
// onChange : setValue에 값을 변화시키는 함수
// placeholder : placeholder 텍스트

export default function Search({ value, onChange, onSubmit, placeholder }) {
  // 엔터를 누르면 submit 되게끔
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <SearchStyle>
      <SearchContainerStyle>
        <Icon >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" 
          height="0.9em">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </Icon>
        <form onSubmit={onSubmit}>
          <InputStyle
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          ></InputStyle>
        </form>
      </SearchContainerStyle>
    </SearchStyle>
  );
}
