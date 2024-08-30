using Microsoft.AspNetCore.Mvc;

namespace DotnetService.APIs;

[ApiController()]
public class HotelsController : HotelsControllerBase
{
    public HotelsController(IHotelsService service)
        : base(service) { }
}
