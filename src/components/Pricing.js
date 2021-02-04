import styled from "styled-components";
import Slider from "./Slider";
import { neutral, main } from "../utils";

export default function Pricing() {
  return (
    <SectionWrapper>
      <Header>
        <h2>Simple, traffic-based pricing</h2>
        <p>Sign-up for our 30 day trial. No credit card require.</p>
      </Header>
      <PricingBox>
        <Row>
          <Slider minValue={8} maxValue={36} />
        </Row>

        <hr />
        <Row>
          <InfoContainer>
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
  height: 600px;
  width: 100%;
  background-image: url("/img/bg-pattern.svg");
  background-repeat: no-repeat;
  background-position: 0 -60px;
`;

const Header = styled.div`
  display: grid;
  place-items: center;
  padding: 80px 0;
  background-image: url("/img/pattern-circles.svg");
  background-repeat: no-repeat;
  background-position: center;
`;

const PricingBox = styled.div`
  padding: 40px 40px;
  background-color: ${neutral[100]};
  box-shadow: 0px 0px 14px 7px ${neutral[200]};
  border-radius: 10px;
  width: 500px;
  height: 50%;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// const Slider = styled.div`
//   height: 10px;
//   width: 100%;
//   background-color: black;
//   margin: 55px 0;
//   border-radius: 10px;
// `;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;

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
`;
