import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  hotelId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  roomNumber?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
