import { ChangeEvent } from "react";

export interface AddAdFormProps {
  file: File | null;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  salary: string;
  setSalary: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  addAd: () => void;
  handleClick: () => void;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
