import { RoomUpdateManyWithoutHotelsInput } from "./RoomUpdateManyWithoutHotelsInput";

export type HotelUpdateInput = {
  address?: string | null;
  description?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  rating?: number | null;
  rooms?: RoomUpdateManyWithoutHotelsInput;
};
