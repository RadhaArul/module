#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using module.Models;

namespace module.Data
{
    public class moduleContext : DbContext
    {
        public moduleContext (DbContextOptions<moduleContext> options)
            : base(options)
        {
        }

        public DbSet<module.Models.Module> Module { get; set; }
    }
}
