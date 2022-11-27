using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace turbomvc.Controllers
{
    [Route("[controller]")]
    public class LitController : Controller
    {
        private readonly ILogger<LitController> _logger;

        public LitController(ILogger<LitController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

    }
}
