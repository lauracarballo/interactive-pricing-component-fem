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
        <label {...labelProps}>
          {state.getThumbValueLabel(0) < 12
            ? "100K"
            : state.getThumbValueLabel(0) === 12
            ? "50K"
            : state.getThumbValueLabel(0) < 16
            ? "50K"
            : state.getThumbValueLabel(0) === 16
            ? "100K"
            : state.getThumbValueLabel(0) < 24
            ? "100K"
            : state.getThumbValueLabel(0) === 24
            ? "500K"
            : state.getThumbValueLabel(0) < 36
            ? "500K"
            : state.getThumbValueLabel(0) == 36
            ? "1M"
            : state.getThumbValueLabel(0)}
        </label>

        <Output {...outputProps}>
          {state.getThumbValueLabel(0) < 12
            ? "8"
            : state.getThumbValueLabel(0) === 12
            ? "12"
            : state.getThumbValueLabel(0) < 16
            ? "12"
            : state.getThumbValueLabel(0) === 16
            ? "16"
            : state.getThumbValueLabel(0) < 24
            ? "16"
            : state.getThumbValueLabel(0) === 24
            ? "24"
            : state.getThumbValueLabel(0) < 36
            ? "24"
            : state.getThumbValueLabel(0) === 36
            ? "36"
            : state.getThumbValueLabel(0)}
        </Output>
      </LabelContainer>

      <TrackContainer {...trackProps} ref={trackRef}>
        <TrackLine />
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
`;

const LabelContainer = styled.div`
  display: flex;
  align-self: stretch;
`;

const TrackContainer = styled.div`
  position: relative;
  height: 30px;
  width: 100%;
`;

const TrackLine = styled.div`
  position: absolute;
  background-color: ${neutral[300]};
  border-radius: 10px;
  height: 10px;
  top: 13px;
  width: 100%;
`;

const ThumbContainer = styled.div`
  position: absolute;
  top: 4px;
  transform: translateX(-50%);
  left: ${(props) => props.state.getThumbPercent(props.index) * 100}%;
`;

const ThumbElement = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isFocusVisible
      ? "orange"
      : props.state.isThumbDragging(props.index)
      ? `${main[200]}`
      : `${main[200]}`};
`;
