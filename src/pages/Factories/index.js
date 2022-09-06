import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Input,
  Button,
  List,
  RatingBar,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const FactoriesPage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/frameone");
  }
  function handleNavigate3() {
    navigate("/landingpage");
  }
  function handleNavigate4() {
    navigate("/factoriesdetails");
  }
  function handleNavigate11() {
    navigate("/landingpage");
  }
  function handleNavigate12() {
    navigate("/factoriesdetails");
  }
  function handleNavigate13() {
    navigate("/frameone");
  }
  function handleNavigate14() {
    navigate("/frameone");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-end mx-[auto] lg:pt-[19px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] w-[100%]">
        <Row className="w-[90%]">
          <Img
            src="images/img_frame_89X293.svg"
            className="common-pointer 3xl:h-[107px] lg:h-[70px] xl:h-[80px] 2xl:h-[90px] w-[23%]"
            onClick={handleNavigate11}
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
          <Stack className="lg:h-[477px] xl:h-[546px] 2xl:h-[614px] 3xl:h-[737px] w-[100%]">
            <Img
              src="images/img_rectangle77.png"
              className="absolute lg:h-[375px] xl:h-[429px] 2xl:h-[483px] 3xl:h-[579px] top-[0] w-[100%]"
              alt="RectangleSeventySeven"
            />
            <Column className="absolute bg-gray_51 bottom-[0] inset-x-[0] justify-end mx-[auto] lg:p-[42px] xl:p-[48px] 2xl:p-[54px] 3xl:p-[64px] rounded-radius15 shadow-bs1 w-[90%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="2xl:mt-[50px] 2xl:mx-[18px] 3xl:mt-[60px] 3xl:mx-[21px] flex lg:mt-[38px] lg:mx-[14px] w-[97%] xl:mt-[44px] xl:mx-[16px]"
                name="GroupFiftyFour"
                placeholder="Enter a compny, or country"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer lg:w-[39px] lg:mx-[7px] xl:w-[45px] xl:mx-[8px] 2xl:w-[51px] 2xl:ml-[10px] 2xl:mr-[9px] 3xl:w-[61px] 3xl:ml-[12px] 3xl:mr-[10px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#8e8e8e"
                      className="cursor-pointer lg:w-[39px] lg:ml-[7px] lg:mr-[17px] xl:w-[45px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[51px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[61px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
                shape="srcRoundedBorder15"
                size="smSrc"
                variant="srcOutlineGray402"
              ></Input>
              <Row className="items-center lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] mr-[auto] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[62%]">
                <Button
                  className="flex items-center justify-center text-center w-[18%]"
                  leftIcon={
                    <Img
                      src="images/img_plus.svg"
                      className="text-center lg:w-[11px] lg:mr-[11px] xl:w-[13px] xl:mr-[13px] 2xl:w-[15px] 2xl:mr-[15px] 3xl:w-[18px] 3xl:mr-[18px]"
                      alt="plus"
                    />
                  }
                  shape="RoundedBorder10"
                  variant="OutlineGray301"
                >
                  <div className="bg-transparent font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    T-Shirt
                  </div>
                </Button>
                <Row className="bg-white_A700 border border-gray_301 border-solid items-center justify-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius10 w-[18%]">
                  <Img
                    src="images/img_plus.svg"
                    className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[15%]"
                    alt="plus"
                  />
                  <Text className="font-medium mb-[1px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_401 w-[auto]">
                    Jacket
                  </Text>
                </Row>
                <Row className="bg-white_A700 border border-gray_301 border-solid items-center justify-center lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius10 w-[13%]">
                  <Img
                    src="images/img_plus.svg"
                    className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] ml-[1px] w-[21%]"
                    alt="plus One"
                  />
                  <Text className="font-medium mb-[1px] 2xl:mx-[10px] 3xl:mx-[12px] lg:mx-[7px] xl:mx-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_401 w-[auto]">
                    Pant
                  </Text>
                </Row>
                <Button
                  className="2xl:ml-[36px] 3xl:ml-[43px] flex items-center justify-center lg:ml-[28px] text-center w-[16%] xl:ml-[32px]"
                  leftIcon={
                    <Img
                      src="images/img_plus.svg"
                      className="text-center lg:w-[11px] lg:mr-[11px] xl:w-[13px] xl:mr-[13px] 2xl:w-[15px] 2xl:mr-[15px] 3xl:w-[18px] 3xl:mr-[18px]"
                      alt="plus"
                    />
                  }
                  shape="RoundedBorder10"
                  variant="OutlineGray301"
                >
                  <div className="bg-transparent font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    Fabric
                  </div>
                </Button>
                <Row className="bg-white_A700 border border-gray_301 border-solid items-center justify-end lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 w-[16%]">
                  <Img
                    src="images/img_plus.svg"
                    className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] w-[16%]"
                    alt="plus Two"
                  />
                  <Text className="font-medium lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_401 w-[auto]">
                    Fabric
                  </Text>
                </Row>
              </Row>
            </Column>
          </Stack>
          <Row className="items-center lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[90%]">
            <Img
              src="images/img_rectangle90.png"
              className="lg:h-[143px] xl:h-[163px] 2xl:h-[184px] 3xl:h-[220px] lg:w-[142px] xl:w-[162px] 2xl:w-[183px] 3xl:w-[219px]"
              alt="RectangleNinety"
            />
            <Img
              src="images/img_rectangle91.png"
              className="lg:h-[143px] xl:h-[163px] 2xl:h-[184px] 3xl:h-[220px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:w-[142px] xl:w-[162px] 2xl:w-[183px] 3xl:w-[219px]"
              alt="RectangleNinetyOne"
            />
            <Img
              src="images/img_rectangle86.png"
              className="lg:h-[143px] xl:h-[163px] 2xl:h-[184px] 3xl:h-[220px] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:w-[142px] xl:w-[162px] 2xl:w-[183px] 3xl:w-[219px]"
              alt="RectangleEightySix"
            />
            <Img
              src="images/img_rectangle87.png"
              className="lg:h-[143px] xl:h-[163px] 2xl:h-[184px] 3xl:h-[220px] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:w-[142px] xl:w-[162px] 2xl:w-[183px] 3xl:w-[219px]"
              alt="RectangleEightySeven"
            />
            <Img
              src="images/img_rectangle88.png"
              className="lg:h-[143px] xl:h-[163px] 2xl:h-[184px] 3xl:h-[220px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:w-[142px] xl:w-[162px] 2xl:w-[183px] 3xl:w-[219px]"
              alt="RectangleEightyEight"
            />
            <Img
              src="images/img_rectangle89.png"
              className="lg:h-[143px] xl:h-[163px] 2xl:h-[184px] 3xl:h-[220px] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:w-[142px] xl:w-[162px] 2xl:w-[183px] 3xl:w-[219px]"
              alt="RectangleEightyNine"
            />
          </Row>
          <Row className="lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[83%]">
            <Text className="font-normal mb-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
              China
            </Text>
            <Text className="font-normal mb-[3px] lg:ml-[139px] xl:ml-[159px] 2xl:ml-[179px] 3xl:ml-[214px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
              India
            </Text>
            <Text className="font-normal mb-[3px] lg:ml-[143px] xl:ml-[164px] 2xl:ml-[185px] 3xl:ml-[222px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
              Thailand
            </Text>
            <Text className="font-normal lg:ml-[121px] xl:ml-[138px] 2xl:ml-[156px] 3xl:ml-[187px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
              Bangladesh
            </Text>
            <Text className="font-normal mb-[3px] lg:ml-[103px] xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[159px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
              Vietnam
            </Text>
            <Text className="font-normal mb-[3px] lg:ml-[122px] xl:ml-[140px] 2xl:ml-[158px] 3xl:ml-[189px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
              Indonesia
            </Text>
          </Row>
          <Row className="items-center 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[84%]">
            <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              3,409 Factories
            </Text>
            <Text className="font-normal xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[92px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              340 Factories
            </Text>
            <Text className="font-normal lg:ml-[101px] xl:ml-[116px] 2xl:ml-[131px] 3xl:ml-[157px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              260 Factories
            </Text>
            <Text className="font-normal lg:ml-[101px] xl:ml-[116px] 2xl:ml-[131px] 3xl:ml-[157px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              58 Factories
            </Text>
            <Text className="font-normal lg:ml-[109px] xl:ml-[125px] 2xl:ml-[141px] 3xl:ml-[169px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              64 Factories
            </Text>
            <Text className="font-normal lg:ml-[108px] xl:ml-[124px] 2xl:ml-[140px] 3xl:ml-[168px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              145 Factories
            </Text>
          </Row>
          <List
            className="gap-[0] min-h-[auto] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[90%]"
            orientation="vertical"
          >
            <Row className="border border-bluegray_101 border-solid justify-between lg:my-[13px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
              <Img
                src="images/img_rectangle92.png"
                className="lg:h-[215px] xl:h-[246px] 2xl:h-[277px] 3xl:h-[332px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:w-[214px] xl:w-[245px] 2xl:w-[276px] 3xl:w-[331px]"
                alt="RectangleNinetyTwo"
              />
              <Column className="mb-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[69%]">
                <Row className="justify-between lg:mr-[19px] xl:mr-[22px] 2xl:mr-[25px] 3xl:mr-[30px] w-[97%]">
                  <Column className="lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[92%]">
                    <Row className="justify-between w-[100%]">
                      <Text
                        className="common-pointer font-bold mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]"
                        onClick={handleNavigate12}
                      >
                        BSK Textiles Company Limited
                      </Text>
                      <Text className="font-bold mb-[2px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                        Good
                      </Text>
                    </Row>
                    <Row className="w-[100%]">
                      <Img
                        src="images/img_star1.svg"
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                        alt="StarOne"
                      />
                      <Img
                        src="images/img_star2.svg"
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                        alt="StarTwo"
                      />
                      <Img
                        src="images/img_star3.svg"
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                        alt="StarThree"
                      />
                      <Img
                        src="images/img_star4.svg"
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                        alt="StarFour"
                      />
                      <Img
                        src="images/img_arrowleft.svg"
                        className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[1%]"
                        alt="arrowleft"
                      />
                      <Text className="font-normal lg:ml-[453px] xl:ml-[518px] 2xl:ml-[583px] 3xl:ml-[700px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                        79 Reviews
                      </Text>
                    </Row>
                    <Row className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[65%]">
                      <Text className="font-normal mb-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_600 w-[auto]">
                        Phet Kasem 3, Yaek 3, Khwaeng Wat Tha Phra, Khet Bangkok
                        Yai, 10600
                      </Text>
                      <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_600 underline w-[auto]">
                        Show on map
                      </Text>
                    </Row>
                    <Text className="font-medium leading-[normal] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[85%]">
                      {" "}
                      Thailand wholesale supplier, stockist, exporter, and
                      source of woven cotton fabric - Plain dyed and printed
                      Cotton Lawn (Muslin) for blouses and kids clothes, Cotton
                      Poplin for shirts. For shirting or uniforms, we also have
                      Cotton Chambray, Yarn dyed cotton, Cotton Twills, &
                      Wrinkle free cotton shirting fabric.{" "}
                    </Text>
                  </Column>
                  <Button
                    className="font-bold lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center lg:w-[39px] xl:w-[45px] 2xl:w-[51px] 3xl:w-[61px]"
                    shape="RoundedBorder10"
                    variant="FillRed600"
                  >
                    7.8
                  </Button>
                </Row>
                <Row
                  className="common-pointer border border-red_600 border-solid items-center justify-end ml-[auto] lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius5 w-[24%]"
                  onClick={handleNavigate13}
                >
                  <Text className="font-normal leading-[normal] mt-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 text-center w-[72%]">
                    Send Technical File
                    <br />
                    to get the Quotation
                  </Text>
                  <Img
                    src="images/img_checkmark.svg"
                    className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mr-[3px] w-[16%]"
                    alt="checkmark"
                  />
                </Row>
              </Column>
            </Row>
            <Row className="border border-bluegray_101 border-solid items-center justify-between lg:my-[13px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
              <Img
                src="images/img_rectangle97.png"
                className="lg:h-[215px] xl:h-[246px] 2xl:h-[277px] 3xl:h-[332px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:w-[214px] xl:w-[245px] 2xl:w-[276px] 3xl:w-[331px]"
                alt="RectangleNinetySeven"
              />
              <Column className="mb-[3px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[69%]">
                <Row className="justify-between ml-[1px] w-[97%]">
                  <Column className="items-center lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[92%]">
                    <Row className="justify-between w-[100%]">
                      <Text className="font-bold mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                        Satin Textiles Co.,Ltd.
                      </Text>
                      <Text className="font-bold mb-[2px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                        Excellent
                      </Text>
                    </Row>
                    <Row className="justify-between w-[99%]">
                      <RatingBar
                        className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px]"
                        value={5}
                        starCount={5}
                        activeColor="var(--yellow_200)"
                        size={((window.innerWidth - 15) * 24) / 1440}
                      ></RatingBar>
                      <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                        169 Reviews
                      </Text>
                    </Row>
                  </Column>
                  <Button
                    className="font-bold lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center lg:w-[39px] xl:w-[45px] 2xl:w-[51px] 3xl:w-[61px]"
                    shape="RoundedBorder10"
                    variant="FillRed600"
                  >
                    8.8
                  </Button>
                </Row>
                <Row className="ml-[3px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[58%]">
                  <Text className="font-normal mb-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_600 w-[auto]">
                    {" "}
                    77/102, Sinn Sathorn Tower Bldg., 25 FL. Khlong San, Bangkok
                    10600
                  </Text>
                  <Text className="font-normal lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_600 underline w-[auto]">
                    Show on map
                  </Text>
                </Row>
                <Row className="justify-between lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
                  <Text className="font-medium leading-[normal] lg:mb-[38px] xl:mb-[43px] 2xl:mb-[49px] 3xl:mb-[58px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[75%]">
                    Satin Textiles core philosophy is to create textiles
                    products that enhance the quality of life of each
                    individual. As both the textile designer and manufacturer:
                    <br />
                    <br />
                    We believe that quality is an imperative rather than
                    perfunctory.
                    <br />
                    We believe that tradition is the experience but not the
                    inspiration.
                    <br />
                    We believe that the value of textiles is tangible as well as
                    abstract.
                    <br />
                    We believe that the merit of a product is functionality
                    while beauty adds to the enchantment.
                    <br />
                    We pledge to create textiles with love and passion
                  </Text>
                  <Row
                    className="common-pointer border border-red_600 border-solid items-center justify-evenly lg:mt-[100px] xl:mt-[114px] 2xl:mt-[129px] 3xl:mt-[154px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius5 w-[24%]"
                    onClick={handleNavigate14}
                  >
                    <Text className="font-normal leading-[normal] mt-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 text-center w-[72%]">
                      Send Technical File
                      <br />
                      to get the Quotation
                    </Text>
                    <Img
                      src="images/img_checkmark.svg"
                      className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[16%]"
                      alt="checkmark One"
                    />
                  </Row>
                </Row>
              </Column>
            </Row>
            <Row className="border border-bluegray_101 border-solid items-center justify-between lg:my-[13px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
              <Img
                src="images/img_rectangle100.png"
                className="lg:h-[215px] xl:h-[246px] 2xl:h-[277px] 3xl:h-[332px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:w-[214px] xl:w-[245px] 2xl:w-[276px] 3xl:w-[331px]"
                alt="Rectangle100"
              />
              <Column className="lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[69%]">
                <Row className="justify-between lg:mr-[19px] xl:mr-[22px] 2xl:mr-[25px] 3xl:mr-[30px] w-[97%]">
                  <Column className="lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[92%]">
                    <Row className="justify-between w-[100%]">
                      <Text className="font-bold mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                        Fabric systems Co.,Ltd.
                      </Text>
                      <Text className="font-bold mb-[2px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                        Excellent
                      </Text>
                    </Row>
                    <Row className="justify-between ml-[1px] w-[99%]">
                      <RatingBar
                        className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px]"
                        value={5}
                        starCount={5}
                        activeColor="var(--yellow_200)"
                        size={((window.innerWidth - 15) * 24) / 1440}
                      ></RatingBar>
                      <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                        169 Reviews
                      </Text>
                    </Row>
                    <Row className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[65%]">
                      <Text className="font-normal mb-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_600 w-[auto]">
                        14/1Chalermprakieat Rama9 Road, Soi 49
                      </Text>
                      <Text className="font-normal lg:ml-[151px] xl:ml-[173px] 2xl:ml-[195px] 3xl:ml-[234px] mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_600 underline w-[auto]">
                        Show on map
                      </Text>
                    </Row>
                    <Text className="font-medium leading-[normal] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[84%]">
                      #No1 Fabric for Exhibition and Event in Thailand. We
                      supply Fabric Backdrop, Fabric Counter, Table covered,
                      Light box Fascia
                    </Text>
                  </Column>
                  <Button
                    className="font-bold lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center lg:w-[39px] xl:w-[45px] 2xl:w-[51px] 3xl:w-[61px]"
                    shape="RoundedBorder10"
                    variant="FillRed600"
                  >
                    8.8
                  </Button>
                </Row>
                <Row
                  className="common-pointer border border-red_600 border-solid items-center justify-end ml-[auto] 3xl:mt-[114px] lg:mt-[73px] xl:mt-[84px] 2xl:mt-[95px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius5 w-[24%]"
                  onClick={handleNavigate2}
                >
                  <Text className="font-normal leading-[normal] mt-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 text-center w-[72%]">
                    Send Technical File
                    <br />
                    to get the Quotation
                  </Text>
                  <Img
                    src="images/img_checkmark.svg"
                    className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mr-[3px] w-[16%]"
                    alt="checkmark Two"
                  />
                </Row>
              </Column>
            </Row>
          </List>
          <Row
            className="common-pointer bg-orange_301 lg:mt-[50px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] p-[1px] w-[90%]"
            onClick={handleNavigate4}
          >
            <Img
              src="images/img_vector4.png"
              className="lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[257px] ml-[3px] mt-[1px] w-[43%]"
              alt="VectorFour"
            />
            <Text className="font-normal leading-[normal] ml-[1px] lg:mt-[57px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[23%]">
              An exclusive fabric factory that always <br />
              be your best service of all time
            </Text>
            <Button
              className="font-normal lg:ml-[154px] xl:ml-[176px] 2xl:ml-[198px] 3xl:ml-[237px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[12%]"
              shape="RoundedBorder10"
              size="md"
              variant="FillWhiteA700"
            >
              Let’s Go!
            </Button>
            <Img
              src="images/img_close.svg"
              className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[2%]"
              alt="close"
            />
          </Row>
          <Row className="bg-orange_101 lg:mt-[50px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] w-[100%]">
            <Column className="lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] 2xl:mt-[94px] w-[73%]">
              <Img
                src="images/img_frame_1.svg"
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
                    name="GroupFiftySix"
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
            <Column className="2xl:mt-[107px] 3xl:mt-[128px] lg:mt-[83px] xl:mt-[95px] w-[21%]">
              <Row className="items-center justify-between ml-[2px] w-[99%]">
                <Text
                  className="common-pointer font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]"
                  onClick={handleNavigate3}
                >
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
                src="images/img_frame_2.svg"
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
        </Column>
        <Column className="lg:mt-[357px] xl:mt-[408px] 2xl:mt-[459px] 3xl:mt-[551px] lg:pr-[1410px] xl:pr-[1613px] 2xl:pr-[1815px] 3xl:pr-[2178px] w-[100%]">
          <div className="overflow-x-auto w-[100%]">
            <Row className="items-center justify-between w-[100%]">
              <Img
                src="images/img_africanamerica.png"
                className="lg:h-[230px] xl:h-[263px] 2xl:h-[296px] 3xl:h-[355px] w-[47%]"
                alt="africanamerica"
              />
              <Img
                src="images/img_womanshopping.png"
                className="lg:h-[230px] xl:h-[263px] 2xl:h-[296px] 3xl:h-[355px] w-[47%]"
                alt="womanshopping"
              />
            </Row>
          </div>
        </Column>
      </Column>
    </>
  );
};

export default FactoriesPage;
