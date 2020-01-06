import React, { useReducer, useContext, createContext, Dispatch } from "react";

// 필요한 타입 미리 선언
type Color = "red" | "orange" | "yellow";

// 상태 위한 타입
type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

// 모든 액션을 위한 타입
type Action =
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color }
  | { type: "TOGGLE_GOOD" };

// 디스패치를 위한 타입(디스패치를 리액트에서 불러올 수 있음)
// 액션의 타입을 디스패치의 제네릭스로 설정
type SampleDispatch = Dispatch<Action>;

// Context 만들기
const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.count
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.text
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.color
      };
    case "TOGGLE_GOOD":
      return {
        ...state,
        isGood: !state.isGood
      };
    default:
      throw new Error("핸들되지 않은 액션");
  }
}

export function SampleProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: "hello",
    color: "red",
    isGood: true
  });
  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

// custom hooks example
// 아래 커스텀 훅에서는 null 체킹을 해주는 것이 매우 중요함
// null 체킹을 처리해주지 않았다면 결과값의 타입은 State | null이 됨
// null 체킹을 해준다면 State로 고정되고
export function useSampleState() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error("SampleProvider를 찾을 수 없습니다");
  return state;
}

export function useSampleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error("SampleProvider를 찾을 수 없습니다");
  return dispatch;
}
