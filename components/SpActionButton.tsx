import {
  ReactNode,
  RefAttributes,
  forwardRef,
  PropsWithChildren,
  ComponentProps,
  Ref,
} from "react";
import dynamic from "next/dynamic";
import type { ActionButton as ActionButtonType } from "./ActionButton";
import { ActionButton } from "@spectrum-web-components/action-button";

// Redecalare forwardRef
// declare module "react" {
//   function forwardRef<T, P = {}>(
//     render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
//   ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
// }

type ActionButtonPropsType = JSX.LibraryManagedAttributes<
  typeof ActionButtonType,
  ComponentProps<typeof ActionButtonType>
>;

// Attempt - 1

export const SpActionButton = dynamic<ActionButtonPropsType>(
  () =>
    import("./ActionButton").then(({ ActionButton }) => {
      return ActionButton;
    }),
  { ssr: false }
);

// Attempt - 2

// const SpActionButtonInner = dynamic<ActionButtonPropsType>(
//   () =>
//     import("./ActionButton").then(({ ActionButton }) => {
//       return ActionButton;
//     }),
//   { ssr: false }
// );

// export const SpActionButton = forwardRef(
//   (
//     props: PropsWithChildren<ActionButtonPropsType>,
//     innerRef?: Ref<ActionButton>
//   ) => <SpActionButtonInner {...props} ref={innerRef} />
// );
