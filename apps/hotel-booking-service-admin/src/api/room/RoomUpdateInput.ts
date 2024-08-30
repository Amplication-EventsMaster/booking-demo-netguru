import { BookingUpdateManyWithoutRoomsInput } from "./BookingUpdateManyWithoutRoomsInput";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";

export type RoomUpdateInput = {
  bookings?: BookingUpdateManyWithoutRoomsInput;
  description?: string | null;
  hotel?: HotelWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
  roomNumber?: string | null;
  typeField?: "Option1" | null;
};
