using Microsoft.AspNetCore.Mvc;

namespace DotnetService.APIs;

[ApiController()]
public class BookingsController : BookingsControllerBase
{
    public BookingsController(IBookingsService service)
        : base(service) { }
}
