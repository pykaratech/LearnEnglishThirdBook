using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace LearnEnglish.Pages.storybook
{
    public class storybookModel : PageModel
    {
        public void OnGet()
        {
            //to get the parameter in link
            string story = HttpContext.Request.Query["story"].ToString();
            ViewData["story"] = story;

        }
    }
}
