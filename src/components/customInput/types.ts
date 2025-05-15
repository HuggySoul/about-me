export interface ICustomInput {
  maxHeight: number;
  defaultValue?: string;
  fontWeight?: number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleError?: (value: string) => string | null;
  hasSubmitted?: boolean;
  setIsEditing?: React.Dispatch<React.SetStateAction<boolean>>;
}
