import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineRed600: "bg-white_A700 border border-red_600 border-solid",
  OutlineBlack900: "border border-black_900 border-solid",
  srcOutlineGray402: "border-2 border-gray_402 border-solid",
};
const shapes = {
  RoundedBorder9: "rounded-radius9",
  srcRoundedBorder15: "rounded-radius15",
};
const sizes = {
  sm: "lg:pb-[11px] xl:pb-[13px] pb-[15px] 3xl:pb-[18px] pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] px-[11px] 3xl:px-[13px] lg:px-[8px] xl:px-[9px]",
  smSrc:
    "lg:pb-[19px] xl:pb-[22px] pb-[25px] 3xl:pb-[30px] lg:pt-[21px] xl:pt-[24px] pt-[28px] 3xl:pt-[33px] lg:px-[19px] xl:px-[22px] px-[25px] 3xl:px-[30px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder9", "srcRoundedBorder15"]),
  variant: PropTypes.oneOf([
    "OutlineRed600",
    "OutlineBlack900",
    "srcOutlineGray402",
  ]),
  size: PropTypes.oneOf(["sm", "smSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "OutlineRed600",
  size: "",
};

export { Input };
