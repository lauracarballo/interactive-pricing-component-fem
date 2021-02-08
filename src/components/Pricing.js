import styled from "styled-components";
import Slider from "./Slider";
import { neutral, main } from "../utils";
import Switch from "./Switch";
import { useState } from "react";
import useViewport from "./useViewport";

export default function Pricing() {
  const [isDiscounted, setIsDiscounted] = useState(false);
  const { isMobile } = useViewport();

  function handleToggle(isSelected) {
    if (isSelected) {
      setIsDiscounted(true);
    } else {
      setIsDiscounted(false);
    }
  }

  return (
    <SectionWrapper>
      <Header>
        <h2>Simple, traffic-based pricing</h2>
        <p>Sign-up for our 30 day trial </p>
        <p> No credit card require.</p>
      </Header>
      <PricingBox>
        <Row isMobile={isMobile}>
          <Slider
            minValue={8}
            maxValue={36}
            defaultValue={[20]}
            isFilled
            isDiscounted={isDiscounted}
          />
        </Row>

        <BillingRow isMobile={isMobile}>
          <span>Monthly Billing</span>
          <Switch onToggle={handleToggle} />
          <span>Yearly Billing</span>
          <Discount>{isMobile ? "-25%" : "25% discount"}</Discount>
        </BillingRow>

        <Divider />

        <Row isMobile={isMobile}>
          <InfoContainer isMobile={isMobile}>
            <InfoRow>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                <path
                  fill="none"
                  stroke="#10D8C4"
                  stroke-width="2"
                  d="M1 4.134l1.907 1.908L7.949 1"
                />
              </svg>
              <div>Unlimited websites</div>
            </InfoRow>
            <InfoRow>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                <path
                  fill="none"
                  stroke="#10D8C4"
                  stroke-width="2"
                  d="M1 4.134l1.907 1.908L7.949 1"
                />
              </svg>
              <div>100% data ownership</div>
            </InfoRow>
            <InfoRow>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                <path
                  fill="none"
                  stroke="#10D8C4"
                  stroke-width="2"
                  d="M1 4.134l1.907 1.908L7.949 1"
                />
              </svg>
              <div> Email Reports</div>
            </InfoRow>
          </InfoContainer>
          <Button>Start my trial</Button>
        </Row>
      </PricingBox>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  height: 100%;
  width: 100%;
  background-image: url("/img/bg-pattern.svg");
  background-repeat: no-repeat;
  background-position: 0 -60px;
`;

const Header = styled.div`
  display: grid;
  place-items: center;
  padding: 70px 0;
  background-image: url("/img/pattern-circles.svg");
  background-repeat: no-repeat;
  background-position: center;
`;

const PricingBox = styled.div`
  background-color: ${neutral[100]};
  box-shadow: 0px 0px 14px 7px ${neutral[200]};
  border-radius: 10px;
  width: 500px;
  height: 60%;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  justify-content: space-between;
  padding: ${(props) => (props.isMobile ? "20px 20px" : "20px 40px")};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isMobile ? "center" : "none")};
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  margin: 5px 0;

  div:first-of-type {
    margin-left: 10px;
  }
`;

const Button = styled.button`
  height: fit-content;
  padding: 12px 40px;
  font-size: 14px;
  border-radius: 20px;
  border: none;
  background-color: ${neutral[500]};
  color: ${main[500]};
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`;

const Discount = styled.div`
  background-color: ${main[300]};
  color: ${main[400]};
  border-radius: 10px;
  padding: 0px 5px;
  align-self: center;
  font-size: 10px;
  font-weight: 800;
`;

const BillingRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.isMobile ? "center" : "space-evenly")};
  width: 315px;
  margin: 0px 150px;
  margin-bottom: 35px;
  margin-top: 10px;
  font-size: 12px;
  align-items: center;
  @media only screen and (max-width: 768px) {
    margin: 0px auto;
  }
`;

const Divider = styled.hr`
  border: 1px solid ${neutral[200]};
`;
