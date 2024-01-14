export async function GET() {

    const body = {
        status: 'ok'
    }

    return new Response(JSON.stringify(body), {
        status: 200,
        headers: {
            'Content-type': 'application/json'
        }
    });
}