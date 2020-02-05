using Microsoft.AspNetCore.Mvc;

namespace AdminLTE.ViewComponents
{
    public class ContentHeaderViewComponent : ViewComponent
    {

        public ContentHeaderViewComponent()
        {
        }

        public IViewComponentResult Invoke(string filter)
        {
            return View();
        }
    }
}
