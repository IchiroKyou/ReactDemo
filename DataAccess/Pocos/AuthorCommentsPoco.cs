using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Pocos
{
    class AuthorCommentsPoco
    {
        public Guid AuthorId { get; set; }
        public string AuthorName { get; set; }
        public List<string> Comments { get; set; }
    }
}
