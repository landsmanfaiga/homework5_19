using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using homework5_16.Data;
using homework5_16.Web.Services;

namespace homework5_16.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly string _connectionString;
        public BookController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("search")]
        public List<Book> SearchBooks(string text)
        {
            var x = new OpenLibraryAPIService();
            return x.SearchBooks(text);

        }
    }
}
