import React from "react";
import { Button } from "react-bootstrap";

function PButton({
  children,
  action,
  variant,
  size,
  loading,
  disabled,
  className,
}) {
  return (
    <Button
      className={className}
      onClick={action}
      variant={variant}
      disabled={disabled}
      size={size}
    >
      {/* Berfungsi untuk disabled button saat user submit agar tidak terjadi multiple request */}
      {loading ? "Loading..." : children}
    </Button>
  );
}

export default PButton;
