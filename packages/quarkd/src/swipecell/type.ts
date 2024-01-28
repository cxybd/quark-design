export interface Props {
  disabled?: boolean;
  name?: string | number;
  leftwidth?: number;
  rightwdith?: number;
}
export type SwipeCellSide = "left" | "right";
export type SwipeCellPosition = SwipeCellSide | "cell" | "outside";
export type BeforeCloseFunc = (
  ...args: any
) => Promise<boolean> | boolean | undefined | void;
