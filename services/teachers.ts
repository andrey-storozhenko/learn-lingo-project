import axios from "axios";
import { Teacher } from "@/types/teacher";

export async function getTeachers():Promise<Teacher[]> {
    const {data} = await axios.get("http://localhost:3000/api/teachers");
    return data;
}