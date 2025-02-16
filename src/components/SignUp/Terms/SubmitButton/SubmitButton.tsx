import { memo } from "react";
import Button from "@/components/Common/Button/Button";

interface SubmitButtonProps {
  disabled: boolean;
}

export const SubmitButton = memo(function SubmitButton({ disabled }: SubmitButtonProps) {
  return (
    <Button type="submit" disabled={disabled}>
      <span>다음</span>
    </Button>
  );
});
