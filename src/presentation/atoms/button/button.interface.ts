export interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    bgColor?: string;
    disabled?: boolean;
  }