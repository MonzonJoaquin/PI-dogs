import { configureStore } from "@reduxjs/toolkit";

import dogs from "./reducer"

export default configureStore({
  reducer: {
    dogs
  }
})