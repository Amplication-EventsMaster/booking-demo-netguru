using DotnetService.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace DotnetService.Infrastructure;

public class DotnetServiceDbContext : DbContext
{
    public DotnetServiceDbContext(DbContextOptions<DotnetServiceDbContext> options)
        : base(options) { }

    public DbSet<RoomDbModel> Rooms { get; set; }

    public DbSet<HotelDbModel> Hotels { get; set; }

    public DbSet<PaymentDbModel> Payments { get; set; }

    public DbSet<CustomerDbModel> Customers { get; set; }

    public DbSet<BookingDbModel> Bookings { get; set; }
}
