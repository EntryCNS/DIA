import styled, { css } from "styled-components";

type Variant = "primary" | "gray";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: Variant;
  href?: string;
}

const buttonStyles = {
  primary: css`
    background-color: white;
    color: #1485EE;
    border: 1px solid #1485EE;
  `,
  gray: css`
    background-color: #F8FAFD;
    color: #8B939C;
    border: none;
  `,
};

const StyledButton = styled.button<{ $variant: Variant }>`
  width: 240px;
  height: 58px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 200px;
    height: 52px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
    height: 48px;
    font-size: 14px;
    border-radius: 6px;
  }

  @media (max-width: 360px) {
    height: 44px;
    font-size: 13px;
  }

  ${({ $variant }) => buttonStyles[$variant]}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const handlePrev = () => {
  window.history.back();
};

export function Button({ text, variant = "primary", href, ...props }: ButtonProps) {
  if (href) {
    return (
      <a href={href} style={{ textDecoration: "none" }}>
        <StyledButton as="div" $variant={variant}>
          {text}
        </StyledButton>
      </a>
    );
  }

  return (
    <StyledButton $variant={variant} {...props} onClick={props.onClick || handlePrev}>
      {text}
    </StyledButton>
  );
}