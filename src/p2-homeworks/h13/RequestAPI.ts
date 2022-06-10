export async function testRequest<T>(url: string, value: boolean): Promise<T> {
    return await fetch(url, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({success: value})
    })
        .then(res => {
            if (!res.ok) throw new Error(res.statusText)
            return res.json()
        })
}


