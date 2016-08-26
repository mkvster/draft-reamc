using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace reamc.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public JsonResult GetMessage()
        {
            return Json(new { result = "Hello World From ReactJS Controller" }, JsonRequestBehavior.AllowGet);
        }
    }
}
