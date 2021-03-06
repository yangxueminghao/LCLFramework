﻿using LCL.Domain.Repositories;
using LCL.Tests.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LCL.Tests.Domain.Repositories
{
    /// <summary>
    /// 表示用于“用户角色关系”聚合根的仓储接口。
    /// </summary>
    public interface IUserRoleRepository : IRepository<UserRole>
    {
        #region Methods
        /// <summary>
        /// 根据指定的用户，获取该用户所属的角色。
        /// </summary>
        /// <param name="user">用户。</param>
        /// <returns>角色。</returns>
        Role GetRoleForUser(User user);
        #endregion
    }
}
