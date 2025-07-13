export interface OptionType {
  id: string;
  name: string;
}

export interface SelectMenuProps {
  options: OptionType[];
  onChange?: (value: string | undefined) => void;
  searchable?: boolean;
  placeholder?: string;
  value: string | undefined;
}