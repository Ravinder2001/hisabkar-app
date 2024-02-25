import { ImageSourcePropType } from "react-native";

export type typeImageType = {
  id: number;
  image: ImageSourcePropType;
  label: string;
  isSelected: boolean;
};
export type selectedFriendType = {
  id: number;
  name: string;
  isActive: boolean;
  image: string;
};
export type expenseListType = {
  name: string;
  type: string;
  amount: number;
  users: {
    id:string,
    name: string;
    avatar: string;
  }[];
  createdAt: string;
};
