import express from "express";
import BaseController from "../utils/BaseController";
import auth0Provider from "@bcwdev/auth0provider";
import { itemsService } from "../services/ItemService";
import { BadRequest } from "../utils/Errors";
import socketService from "../services/SocketService";

export class ItemsController extends BaseController {
  constructor() {
    super("api/items");
    this.router = express
      .Router()
      .get("", this.getAll)
      .use(auth0Provider.getAuthorizedUserInfo)
      .post("", this.create)
      .put("/:id/bid", this.bid);
  }
  async getAll(req, res, next) {
    try {
      let items = await itemsService.findAll(req.params.query);
      res.send(items);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email;
      let item = await itemsService.create(req.body);
      socketService.messageRoom("items", "newItem", item);
      res.send(item);
    } catch (error) {
      next(error);
    }
  }
  async bid(req, res, next) {
    try {
      if (!req.body.bid) {
        throw new BadRequest("Please provide the 'bid', amount ");
      }
      let update = await itemsService.bid(req.params.id, req.body.bid);
      socketService.messageRoom("items", "newBid", update);
      res.send(update);
    } catch (error) {
      next(error);
    }
  }
}
