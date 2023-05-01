import styled from "styled-components";
import Icon from "../Sangho/Icon";
import Input from "../mj/Input";

const SearchStyle = styled.div`
  outline: 1px solid;
`;

const InputStyle = styled.input`
  width: 200px;
  height: 100px;
`;

const SearchContainerStyle = styled.div`
  width: 300px;
  height: 110px;
`;

// const [value, setValue] = useState('');
// onChange : setValue에 값을 변화시키는 함수
// placeholder : placeholder 텍스트

export default function Search({ value, onChange, placeholder }) {
  return (
    <SearchStyle>
      <SearchContainerStyle>
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </Icon>
        <InputStyle
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        ></InputStyle>
      </SearchContainerStyle>
    </SearchStyle>
  );
}
