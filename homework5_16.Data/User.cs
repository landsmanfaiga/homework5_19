using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace homework5_16.Data
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }

        public List<FavoriteBook> FavoriteBooks { get; set; }
    }

    public class FavoriteBook
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Key { get; set; } 
        public string Title { get; set; }
        public string Author { get; set; }
        public string Notes { get; set; }
    }
}
