/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Public } from "../../decorators/public.decorator";
import { Booking } from "./Booking";
import { BookingCountArgs } from "./BookingCountArgs";
import { BookingFindManyArgs } from "./BookingFindManyArgs";
import { BookingFindUniqueArgs } from "./BookingFindUniqueArgs";
import { CreateBookingArgs } from "./CreateBookingArgs";
import { UpdateBookingArgs } from "./UpdateBookingArgs";
import { DeleteBookingArgs } from "./DeleteBookingArgs";
import { PaymentFindManyArgs } from "../../payment/base/PaymentFindManyArgs";
import { Payment } from "../../payment/base/Payment";
import { Customer } from "../../customer/base/Customer";
import { Room } from "../../room/base/Room";
import { BookingService } from "../booking.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Booking)
export class BookingResolverBase {
  constructor(
    protected readonly service: BookingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  async _bookingsMeta(
    @graphql.Args() args: BookingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Booking])
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  async bookings(
    @graphql.Args() args: BookingFindManyArgs
  ): Promise<Booking[]> {
    return this.service.bookings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Booking, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "own",
  })
  async booking(
    @graphql.Args() args: BookingFindUniqueArgs
  ): Promise<Booking | null> {
    const result = await this.service.booking(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Booking)
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "create",
    possession: "any",
  })
  async createBooking(
    @graphql.Args() args: CreateBookingArgs
  ): Promise<Booking> {
    return await this.service.createBooking({
      ...args,
      data: {
        ...args.data,

        customer: args.data.customer
          ? {
              connect: args.data.customer,
            }
          : undefined,

        room: args.data.room
          ? {
              connect: args.data.room,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Booking)
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "update",
    possession: "any",
  })
  async updateBooking(
    @graphql.Args() args: UpdateBookingArgs
  ): Promise<Booking | null> {
    try {
      return await this.service.updateBooking({
        ...args,
        data: {
          ...args.data,

          customer: args.data.customer
            ? {
                connect: args.data.customer,
              }
            : undefined,

          room: args.data.room
            ? {
                connect: args.data.room,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Booking)
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "delete",
    possession: "any",
  })
  async deleteBooking(
    @graphql.Args() args: DeleteBookingArgs
  ): Promise<Booking | null> {
    try {
      return await this.service.deleteBooking(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Payment], { name: "payments" })
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "read",
    possession: "any",
  })
  async findPayments(
    @graphql.Parent() parent: Booking,
    @graphql.Args() args: PaymentFindManyArgs
  ): Promise<Payment[]> {
    const results = await this.service.findPayments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => Customer, {
    nullable: true,
    name: "customer",
  })
  async getCustomer(
    @graphql.Parent() parent: Booking
  ): Promise<Customer | null> {
    const result = await this.service.getCustomer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Room, {
    nullable: true,
    name: "room",
  })
  @nestAccessControl.UseRoles({
    resource: "Room",
    action: "read",
    possession: "any",
  })
  async getRoom(@graphql.Parent() parent: Booking): Promise<Room | null> {
    const result = await this.service.getRoom(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
