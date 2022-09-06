import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Stack, Input, Button } from "components";

const FactoriesDetailsOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate5() {
    navigate("/landingpage");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-end mx-[auto] lg:pt-[19px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] w-[100%]">
        <Row className="w-[90%]">
          <Img
            src="images/img_frame_6.svg"
            className="common-pointer 3xl:h-[107px] lg:h-[70px] xl:h-[80px] 2xl:h-[90px] w-[23%]"
            onClick={handleNavigate5}
            alt="Frame"
          />
          <Text className="font-medium lg:ml-[275px] xl:ml-[314px] 2xl:ml-[354px] 3xl:ml-[425px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
            New & Feature
          </Text>
          <Text className="font-medium lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
            For Brand
          </Text>
          <Text className="font-medium lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
            For You
          </Text>
          <Text className="font-medium lg:ml-[45px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
            For Enterprise
          </Text>
          <Img
            src="images/img_arrowdown.svg"
            className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[6px]"
            alt="arrowdown"
          />
          <Text className="font-bold ml-[3px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
            Join Us
          </Text>
        </Row>
        <Column className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
          <div className="bg-yellow_800 lg:h-[58px] xl:h-[66px] 2xl:h-[75px] 3xl:h-[89px] w-[100%]"></div>
          <Column className="bg-gray_201 lg:p-[35px] xl:p-[40px] 2xl:p-[46px] 3xl:p-[55px] w-[100%]">
            <Row className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mr-[202px] xl:mr-[231px] 2xl:mr-[260px] 3xl:mr-[312px] w-[79%]">
              <Stack className="bg-white_A700 lg:h-[340px] xl:h-[388px] 2xl:h-[437px] 3xl:h-[524px] lg:px-[38px] xl:px-[43px] 2xl:px-[49px] 3xl:px-[58px] w-[59%]">
                <Img
                  src="images/img_tshirt1011.png"
                  className="absolute lg:h-[262px] xl:h-[299px] 2xl:h-[337px] 3xl:h-[404px] inset-[0] justify-center m-[auto] w-[76%]"
                  alt="tshirt1011"
                />
              </Stack>
              <Text className="font-normal leading-[151.02%] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[37%]">
                <span className="text-black_900 font-inter font-bold">
                  Fabric: 100% polyester bideye 180 gsm
                  <br />
                  <br />
                </span>
                <span className="text-black_900 font-inter">
                  <br />
                </span>
                <span className="text-black_900 font-inter font-bold">
                  Style: as per the original sample with:
                  <br />
                  <br />
                </span>
                <span className="text-black_900 font-inter font-medium">
                  - pantone 7455C blue short sleeves <br />- contrast pantone
                  703C red collar <br />- pantone 7455C blue stripe collar{" "}
                  <br />
                  <br />
                </span>
                <span className="text-black_900 font-inter">
                  <br />
                </span>
                <span className="text-black_900 font-inter font-bold">
                  <br />
                  Sizes: S-XL <br />
                  Color:
                  <br />
                  <br />
                </span>
                <span className="text-black_900 font-inter font-medium">
                  - white <br />- pantone 7455C
                  <br />
                  <br />- pantone 703C
                </span>
                <span className="text-black_900 font-inter">
                  <br />
                  <br />
                  <br />
                </span>
                <span className="text-black_900 font-inter font-bold">
                  Label: women main + size label in neck
                  <br />
                  <br />
                  <br />
                  Logo: print on left chest and back
                  <br />
                  <br />
                </span>
                <span className="text-black_900 font-inter">
                  <br />
                </span>
                <span className="text-black_900 font-inter font-bold">
                  Packing: ind. self-adhesive poly bag <br />
                  with size indication in white
                  <br />
                  <br />
                </span>
                <span className="text-black_900 font-inter">
                  <br />
                </span>
                <span className="text-black_900 font-inter font-bold">
                  Packaging: per 50 pcs in export carton, solid sizes
                  <br />
                </span>
              </Text>
            </Row>
            <Row className="justify-end lg:mb-[51px] xl:mb-[58px] 2xl:mb-[66px] 3xl:mb-[79px] ml-[auto] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[14%]">
              <Img
                src="images/img_star1_3.svg"
                className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] my-[1px] w-[13%]"
                alt="StarOne"
              />
              <Img
                src="images/img_star2_3.svg"
                className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mb-[1px] ml-[2px] w-[13%]"
                alt="StarTwo"
              />
              <Img
                src="images/img_star4_3.svg"
                className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mb-[1px] ml-[2px] w-[13%]"
                alt="StarFour"
              />
              <Img
                src="images/img_star3_3.svg"
                className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] ml-[2px] mt-[1px] w-[13%]"
                alt="StarThree"
              />
              <Img
                src="images/img_arrowleft.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[2px] mt-[1px] w-[6%]"
                alt="arrowleft"
              />
              <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-indigo_602 w-[auto]">
                2 Rating
              </Text>
            </Row>
          </Column>
          <footer className="bg-orange_101 lg:mt-[443px] xl:mt-[507px] 2xl:mt-[570px] 3xl:mt-[684px] w-[100%]">
            <Row className="lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] lg:mr-[56px] xl:mr-[64px] 2xl:mr-[73px] 3xl:mr-[87px] xl:mt-[113px] 2xl:mt-[128px] 3xl:mt-[153px] lg:mt-[99px] w-[90%]">
              <Column className="w-[77%]">
                <Img
                  src="images/img_frame_7.svg"
                  className="lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] w-[18%]"
                  alt="Frame One"
                />
                <Column className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[51%]">
                  <Text className="font-normal lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
                    one-stop made by your choices
                  </Text>
                  <Row className="items-center justify-evenly lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                    <Input
                      className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-red_301 text-red_301 w-[100%]"
                      wrapClassName="w-[78%]"
                      type="email"
                      name="GroupSixtyOne"
                      placeholder="Email"
                      size="sm"
                    ></Input>
                    <Button
                      className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
                      variant="OutlineRed600"
                    >
                      Send
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[23%]">
                <Row className="items-center justify-between ml-[2px] w-[99%]">
                  <Text className="font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
                    Home{" "}
                  </Text>
                  <Text className="font-medium mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
                    Facebook
                  </Text>
                </Row>
                <Row className="justify-between ml-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]">
                  <Text className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
                    About{" "}
                  </Text>
                  <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
                    Instagram
                  </Text>
                </Row>
                <Text className="font-medium ml-[2px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
                  Services
                </Text>
                <Text className="font-medium ml-[2px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
                  Contact
                </Text>
                <Img
                  src="images/img_frame_34X111.svg"
                  className="lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] 3xl:mt-[110px] lg:mt-[71px] xl:mt-[81px] 2xl:mt-[92px] w-[38%]"
                  alt="Frame Two"
                />
                <Text className="font-normal ml-[2px] mt-[3px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_600 w-[auto]">
                  PRIVACY POLICY
                </Text>
                <Text className="font-normal ml-[2px] mt-[3px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_600 w-[auto]">
                  TERMS AND CONDITIONS{" "}
                </Text>
              </Column>
            </Row>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default FactoriesDetailsOnePage;
