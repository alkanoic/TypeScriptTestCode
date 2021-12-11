using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Routing;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Threading.Tasks;

namespace mvc.Filters
{
    public class ActionExecuteFilter : ActionFilterAttribute
    {

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var log = new ActionLog
            {
                ActionType = "Executing",
                Method = context.HttpContext.Request.Method,
                Path = context.HttpContext.Request.Path,
                ActionArguments = context.ActionArguments,
                RouteValues = context.HttpContext.Request.RouteValues,
                Query = context.HttpContext.Request.Query,
                SessionId = context.HttpContext.Session.Id,
                ConnectionId = context.HttpContext.Connection.Id
            };
            using (var reader = new StreamReader(context.HttpContext.Request.Body))
            {
                var body = reader.ReadToEndAsync().Result;
            }
            Debug.WriteLine(System.Text.Json.JsonSerializer.Serialize(log));

        }

        public override void OnActionExecuted(ActionExecutedContext context)
        {
            var log = new ActionLog
            {
                ActionType = "Executed",
                Method = context.HttpContext.Request.Method,
                Path = context.HttpContext.Request.Path,
                RouteValues = context.HttpContext.Request.RouteValues,
                Query = context.HttpContext.Request.Query,
                SessionId = context.HttpContext.Session.Id,
                ConnectionId = context.HttpContext.Connection.Id,
                StatusCode = context.HttpContext.Response.StatusCode,
            };
            Debug.WriteLine(System.Text.Json.JsonSerializer.Serialize(log));
        }

        private class ActionLog
        {
            public string ActionType { get; set; }
            public string Method { get; set; }
            public string Path { get; set; }
            public IDictionary<string, object> ActionArguments { get; set; }
            public RouteValueDictionary RouteValues { get; set; }
            public IQueryCollection Query { get; set; }
            public string SessionId { get; set; }
            public string ConnectionId { get; set; }
            public int StatusCode { get; set; }
        }

    }
}
