using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace LearnEnglish.Pages.balloon
{
    public class balloonModel : PageModel
    {
      
        public void OnGet()
        {
            //to get the parameter in link
            string chaptername = HttpContext.Request.Query["chapter"].ToString();
            ViewData["chaptername"] = chaptername;


        }
    }
}
