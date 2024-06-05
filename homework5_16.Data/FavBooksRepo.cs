using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace homework5_16.Data
{
    public class FavBooksRepo
    {
        private readonly string _connectionString;
        public FavBooksRepo(string connectionString)
        {
             _connectionString = connectionString;
        }

        public void AddBook(FavoriteBook book)
        {
            var context = new BookDataContext(_connectionString);
            context.FavoriteBooks.Add(book);
            context.SaveChanges();
        }
        public void RemoveBook(FavoriteBook book)
        {
            var context = new BookDataContext(_connectionString);
            var b = context.FavoriteBooks.FirstOrDefault(x => x.Key == book.Key);
            context.FavoriteBooks.Remove(b);
            context.SaveChanges();
        }

        public List<FavoriteBook> GetBooks(int id)
        {
            var context = new BookDataContext(_connectionString);
            return context.FavoriteBooks.Where(b => b.UserId == id).ToList();
        }

        public void UpdateFav(FavoriteBook book)
        {
            var context = new BookDataContext(_connectionString);
            context.FavoriteBooks.Update(book);
            context.SaveChanges();
        }
    }
}
