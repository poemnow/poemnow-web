import styled from "styled-components";

const CheckboxStyled = styled.input`
  //style css code
  width: 100%;
`;

function Checkbox() {
  return (
    <div>
      <CheckboxStyled type="checkbox" />
    </div>
  );
}

export default Checkbox;
