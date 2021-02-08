import { useRef } from "react";
import styled from "styled-components";
import { useSlider, useSliderThumb } from "@react-aria/slider";
import { useSliderState } from "@react-stately/slider";
import { useFocusRing } from "@react-aria/focus";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { mergeProps } from "@react-aria/utils";
import { useNumberFormatter } from "@react-aria/i18n";
import { main, neutral } from "../utils";

export default function Slider(props) {
  let trackRef = useRef(null);
  let numberFormatter = useNumberFormatter(props.formatOptions);
  let state = useSliderState({ ...props, numberFormatter });
  let { groupProps, trackProps, labelProps, outputProps } = useSlider(
    props,
    state,
    trackRef
  );

  return (
    <Group {...groupProps}>
      <LabelContainer>
        {props.isDiscounted ? (
          <>
            <Label {...labelProps}>
              {+state.getThumbValueLabel(0) < 12
                ? "10K PAGEVIEWS"
                : +state.getThumbValueLabel(0) === 12
                ? "50K PAGEVIEWS"
                : +state.getThumbValueLabel(0) < 16
                ? "50K PAGEVIEWS"
                : +state.getThumbValueLabel(0) === 16
                ? "100K PAGEVIEWS"
                : +state.getThumbValueLabel(0) < 24
                ? "100K PAGEVIEWS"
                : +state.getThumbValueLabel(0) === 24
                ? "500K PAGEVIEWS"
                : +state.getThumbValueLabel(0) < 36
                ? "500K PAGEVIEWS"
                : +state.getThumbValueLabel(0) === 36
                ? "1M PAGEVIEWS"
                : +state.getThumbValueLabel(0)}
            </Label>
            <Output {...outputProps}>
              {+state.getThumbValueLabel(0) < 12
                ? "$6.00"
                : +state.getThumbValueLabel(0) === 12
                ? "$9.00"
                : +state.getThumbValueLabel(0) < 16
                ? "$9.00"
                : +state.getThumbValueLabel(0) === 16
                ? "$14.00"
                : +state.getThumbValueLabel(0) < 24
                ? "$14.00"
                : +state.getThumbValueLabel(0) === 24
                ? "$18.00"
                : +state.getThumbValueLabel(0) < 36
                ? "$18.00"
                : +state.getThumbValueLabel(0) === 36
                ? "$27.00"
                : +state.getThumbValueLabel(0)}
            </Output>
            <Tag>/month</Tag>
          </>
        ) : (
          <>
            <Label {...labelProps}>
              {+state.getThumbValueLabel(0) < 12
                ? "10K PAGEVIEWS"
                : +state.getThumbValueLabel(0) === 12
                ? "50K PAGEVIEWS"
                : +state.getThumbValueLabel(0) < 16
                ? "50K PAGEVIEWS"
                : +state.getThumbValueLabel(0) === 16
                ? "100K PAGEVIEWS"
                : +state.getThumbValueLabel(0) < 24
                ? "100K PAGEVIEWS"
                : +state.getThumbValueLabel(0) === 24
                ? "500K PAGEVIEWS"
                : +state.getThumbValueLabel(0) < 36
                ? "500K PAGEVIEWS"
                : +state.getThumbValueLabel(0) === 36
                ? "1M PAGEVIEWS"
                : +state.getThumbValueLabel(0)}
            </Label>
            <Output {...outputProps}>
              {+state.getThumbValueLabel(0) < 12
                ? "$8.00"
                : +state.getThumbValueLabel(0) === 12
                ? "$12.00"
                : +state.getThumbValueLabel(0) < 16
                ? "$12.00"
                : +state.getThumbValueLabel(0) === 16
                ? "$16.00"
                : +state.getThumbValueLabel(0) < 24
                ? "$16.00"
                : +state.getThumbValueLabel(0) === 24
                ? "$24.00"
                : +state.getThumbValueLabel(0) < 36
                ? "$24.00"
                : +state.getThumbValueLabel(0) === 36
                ? "$36.00"
                : +state.getThumbValueLabel(0)}
            </Output>
            <Tag>/month</Tag>
          </>
        )}
      </LabelContainer>

      <TrackContainer {...trackProps} ref={trackRef}>
        <TrackLine isFilled={props.isFilled} state={state} index={0} />
        <Thumb index={0} state={state} trackRef={trackRef} />
      </TrackContainer>
    </Group>
  );
}

function Thumb(props) {
  let { state, trackRef, index } = props;
  let inputRef = useRef(null);
  let { thumbProps, inputProps } = useSliderThumb(
    {
      index,
      trackRef,
      inputRef,
    },
    state
  );

  let { focusProps, isFocusVisible } = useFocusRing();
  return (
    <ThumbContainer state={state} index={index}>
      <ThumbElement
        {...thumbProps}
        state={state}
        index={index}
        isFocusVisible={isFocusVisible}
      >
        <ThumbSvg xmlns="http://www.w3.org/2000/svg" width="22" height="13">
          <g fill="#80FFF3" fill-rule="evenodd">
            <path d="M16 2.558v7.884a1 1 0 001.735.679l3.639-3.943a1 1 0 000-1.356l-3.64-3.943A1 1 0 0016 2.558zM6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z" />
          </g>
        </ThumbSvg>
        <VisuallyHidden>
          <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
        </VisuallyHidden>
      </ThumbElement>
    </ThumbContainer>
  );
}

const Group = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  touch-action: none;
`;

const Output = styled.output`
  flex: 1 0 auto;
  text-align: end;
  align-items: center;
  font-size: 40px;
  margin: 5px;
  font-weight: 700;
  color: ${neutral[500]};
`;

const LabelContainer = styled.div`
  display: flex;
  align-self: stretch;
  font-size: 12px;
`;

const Label = styled.div`
  letter-spacing: 1.5px;
  align-self: center;
`;

const Tag = styled.span`
  letter-spacing: 1.5px;
  align-self: center;
`;

const TrackContainer = styled.div`
  position: relative;
  height: 25px;
  width: 100%;
  margin: 10px 0;
`;

const TrackLine = styled.div`
  position: absolute;
  background-color: ${neutral[300]};
  border-radius: 10px;
  height: 8px;
  top: 13px;
  width: 100%;

  &:before {
    content: "";
    height: 8px;
    width: ${(props) => props.state.getThumbPercent(props.index) * 100}%;
    background-color: ${main[100]};
    position: absolute;
    border-radius: 10px;
  }
`;

const ThumbContainer = styled.div`
  position: absolute;
  top: 0px;
  transform: translateX(-50%);
  left: ${(props) => props.state.getThumbPercent(props.index) * 100}%;
`;

const ThumbElement = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isFocusVisible
      ? `${main[200]}`
      : props.state.isThumbDragging(props.index)
      ? `${main[200]}`
      : `${main[100]}`};
  &:hover {
    background-color: ${main[200]};
    cursor: pointer;
  }
`;

const ThumbSvg = styled.svg`
  position: absolute;
  top: 10px;
  left: 6px;
`;
