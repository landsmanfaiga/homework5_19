using homework5_16.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace homework5_16.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class FavBookController : ControllerBase
    {
        private readonly string _connectionString;
        public FavBookController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("addfav")]
        public void AddFav(FavoriteBook book)
        {
            var repo1 = new UserRepo(_connectionString);
            book.UserId = repo1.GetByEmail(User.Identity.Name).Id;
            var repo = new FavBooksRepo(_connectionString);
            repo.AddBook(book);
        }

        [HttpPost]
        [Route("deletefav")]
        public void DeleteFav(FavoriteBook book)
        {
            var repo1 = new UserRepo(_connectionString);
            book.UserId = repo1.GetByEmail(User.Identity.Name).Id;
            var repo = new FavBooksRepo(_connectionString);
            repo.RemoveBook(book);
        }

        [HttpGet]
        [Route("getfavs")]
        public List<FavoriteBook> GetFavorites()
        {
            var repo1 = new UserRepo(_connectionString);
            int id = repo1.GetByEmail(User.Identity.Name).Id;
            var repo = new FavBooksRepo(_connectionString);
            return repo.GetBooks(id);
        }

        [HttpPost]
        [Route("updatefav")]
        public void UpdateFav(FavoriteBook book)
        {
            var repo1 = new UserRepo(_connectionString);
            book.UserId = repo1.GetByEmail(User.Identity.Name).Id;
            var repo = new FavBooksRepo(_connectionString);
            repo.UpdateFav(book);
        }
    }
}
