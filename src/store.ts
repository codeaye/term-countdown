import { writable } from "svelte/store";
export let dark_mode = writable<boolean>(localStorage.dark_mode === 'true');
dark_mode.subscribe((v) => localStorage.dark_mode = String(v))

