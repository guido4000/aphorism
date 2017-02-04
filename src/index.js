import { app } from "hyperapp";
import update from "./update";
import model from "./model";
import view from "./view";

app({ model, update, view });
