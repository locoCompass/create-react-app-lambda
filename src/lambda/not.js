const { Client } = require("@notionhq/client")


export async function handler(event, context) {
	// Initializing a client
	const notion = new Client({
		auth: process.env.NOTION_ACCESS_TOKEN,
	})
	console.log(notion)
	try {
		const listUsersResponse = (await notion.users.list()).results
		await console.log(listUsersResponse)
		return {
			statusCode: 200,
			body: JSON.stringify({ msg: `${listUsersResponse[0].name}` })
		}

	} catch (err) {
		console.log(err) // output to netlify function log
		return {
			statusCode: 500,
			body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
		}
	}
}
