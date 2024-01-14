import projects_en from '$lib/projects_en.json';
import { json } from "@sveltejs/kit";

export async function GET() {

    const body = {
        projects_en: projects_en
    }

    return json(body);
}