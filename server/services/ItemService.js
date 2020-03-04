import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";
import Item from "../models/Item";

class ItemsService {
  async findAll(query = {}) {
    let items = await dbContext.Items.find(query).populate(
      "creator",
      "name picture"
    );
    return items;
  }
  async findById(id) {
    let value = await dbContext.Items.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
  async create(body) {
    let item = await dbContext.Items.create(body);
    return item;
  }
  async bid(id, bid) {
    let item = await this.findById(id);
    // @ts-ignore
    if (item.price > bid) {
      throw new BadRequest("Bid must be higher");
    }
    // @ts-ignore
    item.price = bid;
    await item.save();
    return item;
  }
}

export const itemsService = new ItemsService();
