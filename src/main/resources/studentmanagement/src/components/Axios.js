import { configure } from "@testing-library/react";
import axios from "axios";
import Login from "./Login";
class Interceptt{
    verify(){
        axios.interceptors.request.use()
    }
}