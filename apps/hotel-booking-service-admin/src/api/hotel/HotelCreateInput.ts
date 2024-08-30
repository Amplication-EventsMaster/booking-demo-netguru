import { RoomCreateNestedManyWithoutHotelsInput } from "./RoomCreateNestedManyWithoutHotelsInput";

export type HotelCreateInput = {
  address?: string | null;
  description?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  rating?: number | null;
  rooms?: RoomCreateNestedManyWithoutHotelsInput;
};
