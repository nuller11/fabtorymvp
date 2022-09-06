import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-radius10",
  RoundedBorder13: "rounded-radius13",
  RoundedBorder33: "rounded-radius335",
};
const variants = {
  OutlineBlack9001_2: "border-2 border-black_900 border-solid text-black_900",
  FillOrangeA201: "bg-orange_A201 text-white_A700",
  OutlineRed600:
    "bg-red_600 border border-red_600 border-solid text-white_A700",
  OutlineGray301:
    "bg-white_A700 border border-gray_301 border-solid text-bluegray_401",
  FillRed600: "bg-red_600 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-red_600",
  OutlineBlack900: "border-black_900 border-bw3 border-solid text-black_900",
};
const sizes = {
  sm: "lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px]",
  md: "lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px]",
  lg: "lg:p-[17px] xl:p-[20px] p-[23px] 3xl:p-[27px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder10",
    "RoundedBorder13",
    "RoundedBorder33",
  ]),
  variant: PropTypes.oneOf([
    "OutlineBlack9001_2",
    "FillOrangeA201",
    "OutlineRed600",
    "OutlineGray301",
    "FillRed600",
    "FillWhiteA700",
    "OutlineBlack900",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "OutlineBlack9001_2",
  size: "sm",
};

export { Button };
