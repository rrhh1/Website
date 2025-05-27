import {writable} from "svelte/store";
import {directory_info} from "./directoryTree";

export const chatHistory = writable<Record<string, string>[]>([]);

export const directory = writable<Record<string, any>>(directory_info);
