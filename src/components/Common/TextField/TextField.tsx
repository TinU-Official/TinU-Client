import styled from "@emotion/styled";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  rightAddOn?: React.ReactNode;
}

function TextField({ placeholder, rightAddOn, ...props }: TextFieldProps) {
  return (
    <TextFieldWrapper>
      <InputWrapper>
        <PlaceHolderText>{placeholder}</PlaceHolderText>
        <input {...props} />
        {rightAddOn ?? rightAddOn}
      </InputWrapper>
    </TextFieldWrapper>
  );
}

export default TextField;

const TextFieldWrapper = styled.div`
  width: 33.5rem;
  height: 6rem;
  padding: 0 1.5rem 0 1.8rem;
  box-shadow: inset 0 0 0 2px red;
  border-radius: 12px;
`;

const PlaceHolderText = styled.span`
  width: 33.5rem;
  height: 6rem;
  box-shadow: inset 0 0 0 2px red;
  border-radius: 12px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
`;
