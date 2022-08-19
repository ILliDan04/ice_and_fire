import axios from "axios";
import { FIRE_AND_ICE_BASE_URL } from "../../config/constants";

export const fireAndIceAPI = axios.create({ baseURL: FIRE_AND_ICE_BASE_URL });
