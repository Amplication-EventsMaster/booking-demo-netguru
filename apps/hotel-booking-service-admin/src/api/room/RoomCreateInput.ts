import { BookingCreateNestedManyWithoutRoomsInput } from "./BookingCreateNestedManyWithoutRoomsInput";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";

export type RoomCreateInput = {
  bookings?: BookingCreateNestedManyWithoutRoomsInput;
  description?: string | null;
  hotel?: HotelWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
  roomNumber?: string | null;
  typeField?: "Option1" | null;
};
