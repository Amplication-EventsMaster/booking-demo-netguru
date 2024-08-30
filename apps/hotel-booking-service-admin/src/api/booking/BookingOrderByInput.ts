import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  checkInDate?: SortOrder;
  checkOutDate?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  roomId?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
