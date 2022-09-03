import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export const MockCreated = new MockAdapter(axios);
export const AxiosMockRequest = axios;
