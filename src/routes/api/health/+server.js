import {json} from "@sveltejs/kit";

export async function GET() {



    const body = {
        status: 200,
        body: {
            status: 'ok',
            timestamp: new Date().toISOString()
        }
    }

    return body;
}