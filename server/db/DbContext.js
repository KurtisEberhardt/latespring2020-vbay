import mongoose from "mongoose";
import ProfileSchema from "../models/Profile";
import ItemSchema from "../models/Item";

class DbContext {
  Items = mongoose.model("Item", ItemSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
}

export const dbContext = new DbContext();
