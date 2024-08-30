import { Room } from "../room/Room";

export type Hotel = {
  address: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  rating: number | null;
  rooms?: Array<Room>;
  updatedAt: Date;
};
