const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');
class UserService {
  constructor() {

  }

  async create(data) {
    const res = await models.User.create(data);
    return res;
  }

  async find() {
    const res = await models.User.findAll();
    return res;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const res = await user.update(changes);
    return res;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
  }
}

module.exports = UserService;
