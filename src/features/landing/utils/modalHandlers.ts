import type { Tier } from "../types/subscription-form.types";

/**
 * Builds the Select's onValueChange handler. base-ui's Select can report
 * `null` (e.g. on clear), so this guards against that before writing to form state.
 */
export function createTierChangeHandler(
  update: (field: "tier", value: Tier) => void,
) {
  return (value: Tier | null) => {
    if (value) update("tier", value);
  };
}

/**
 * Builds the Dialog's onOpenChange handler. Resets the form shortly after
 * close so it doesn't visibly clear while the close animation is still playing.
 */
export function createOpenChangeHandler(
  setOpen: (open: boolean) => void,
  resetAfterClose: () => void,
) {
  return (next: boolean) => {
    setOpen(next);
    if (!next) resetAfterClose();
  };
}
