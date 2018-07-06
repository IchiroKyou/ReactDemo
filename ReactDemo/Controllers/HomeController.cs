using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ReactDemo.Models;

namespace ReactDemo.Controllers
{
    public class HomeController : Controller
    {
        private static readonly IList<CommentModel> _comments;

        static HomeController()
        {
            _comments = new List<CommentModel>
            {
                new CommentModel{
                    Id = 1,
                    Author = "Agatha Christie",
                    Text = "This is a comment!"
                },
                new CommentModel{
                    Id = 2,
                    Author = "John Doe",
                    Text = "Another comment from JD"
                },
                new CommentModel{
                    Id = 3,
                    Author = "Ruth Mittens",
                    Text = "*Another* comment..."
                }
            };
        }


        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetComments()
        {
            return Json(_comments, JsonRequestBehavior.AllowGet);
        }
    }
}