import { app } from "hyperapp";
import update from "./update";
import model from "./model";
import view from "./view";
import subs from "./subs";

app({ model, update, view, subs });
