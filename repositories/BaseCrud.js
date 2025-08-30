const { PrismaClient } = require("@prisma/client");
const { logger } = require("../config/logger-config");
const { error } = require("winston");
const { response } = require("express");

const prisma = new PrismaClient();

class baseCrud {
  constructor(model) {
    this.model = prisma[model]; //dynamicall add all the models like user,post ,airplane
    this.modelName = model; // logs la include aga name
  }

  async create(data) {
    try {
      const reponse = await this.model.create({ date });
      return reponse;
    } catch (err) {
      logger.error(
        `something went wrong in BaseCrud Repo ${this.modelName} :createF`
      );
      throw err;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findMany();
      return response;
    } catch (err) {
      logger.error(
        `something went wrong in Based Crud : get - ${this.modelName} `
      );
      throw err;
    }
  }
  async get(id) {
    try {
      const reponse = await this.model.findUnique({
        where: { id },
      });
      return response;
    } catch (err) {
      logger.error(
        `something went wrong : getbyId in base crud ${this.modelName}`
      );
      throw err;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update({
        data,
        where: { id },
      });
      return response;
    } catch (err) {
      logger.error(
        `something went wrong  in update Base crus ${this.modelName}`
      );
      throw err;
    }
  }

  async delete(id) {
    try {
      const response = await this.model.delete({ where: { id } });
      return response;
    } catch (err) {
      logger.error(
        `something went wrong while delete in base Crud ${this.modelName}`
      );
      throw err;
    }
  }
}
