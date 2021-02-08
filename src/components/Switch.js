import { useSwitch } from "@react-aria/switch";
import { useRef } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useToggleState } from "@react-stately/toggle";
import { useFocusRing } from "@react-aria/focus";
import styled from "styled-components";
import { main, neutral } from "../utils";

export default function Switch(props) {
  const state = useToggleState(props);
  const ref = useRef();
  const { inputProps } = useSwitch(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  const { isSelected } = state;

  return (
    <Label>
      <VisuallyHidden>
        <input
          onClick={props.onToggle(isSelected)}
          {...inputProps}
          {...focusProps}
          ref={ref}
        />
      </VisuallyHidden>
      <svg width={50} height={30} aria-hidden="true">
        <rect
          x={4}
          y={4}
          width={40}
          height={21}
          rx={12}
          fill={isSelected ? `${main[200]}` : `${neutral[300]}`}
        />
        <circle cx={isSelected ? 34 : 16} cy={14} r={5} fill="white" />
        {isFocusVisible && (
          <rect
            x={0}
            y={0}
            width={48}
            height={28}
            rx={14}
            fill="none"
            stroke="orange"
            strokeWidth={2}
          />
        )}
      </svg>
      {props.children}
    </Label>
  );
}

const Label = styled.label`
  display: flex;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`;
