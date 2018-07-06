using Data;
using DataAccess.Pocos;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DataAccess
{
    public class CommentsDao
    {
        public List<AuthorCommentsPoco> GetAll(Guid authorId)
        {
            AuthorCommentsPoco authorComments;
            using(var dbContext = new CommentsDbContext())
            {
                authorComments = from author in dbContext.Authors
                                     join comment in dbContext.Comments
                                     on author.Id equals comment.AuthorId
                                     where author.Id == authorId
                                     select new AuthorCommentsPoco
                                     {
                                         AuthorId = author.Id,
                                         AuthorName = author.Name,
                                         Comments = comment//TODO
                                     };
            }
            return authorComments;
        }
    }
}
