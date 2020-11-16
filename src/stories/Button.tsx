import styled, { css } from "styled-components/macro";
import React from "react";
import classNames from "classnames";

interface StyleProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
}

export interface ButtonProps extends StyleProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const primaryStyles = css`
  background-color: #1ea7fd;
`;

const secondaryStyles = css`
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
`;

const Btn = styled.button<StyleProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  /* Three ways of visually reacting to props: */

  /* Method 1. Determining the value for a single CSS property based on a prop */
  color: ${(props) => (props.primary ? "white" : "#333")};

  /* Method 2. Grabbing a bunch of CSS (properties and values) based on a prop */
  ${(props) => (props.primary ? primaryStyles : secondaryStyles)}

  /* Method 3. Setting styles based on a class name that's set on this component */
  &.small {
    font-size: 12px;
    padding: 10px 16px;
  }

  &.medium {
    font-size: 14px;
    padding: 11px 20px;
  }

  &.large {
    font-size: 16px;
    padding: 12px 24px;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <Btn
      type="button"
      className={classNames(size)}
      style={{ backgroundColor }}
      primary={primary}
      {...props}
    >
      {label}
    </Btn>
  );
};
