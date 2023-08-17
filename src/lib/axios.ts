import axios from "axios";
import { appConfig } from "@/constants";

/**
 * Axios defaults
 */
axios.defaults.baseURL = appConfig.apiBaseUrl;

// Headers
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common.Accept = "application/json";

export { axios };
