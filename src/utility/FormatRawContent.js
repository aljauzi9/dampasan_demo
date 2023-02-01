export function FormatRawContent(content) {
	/* NOTE
	 ** content type String
	 */

	let rawContent;
	switch (content) {
		case null:
		case undefined:
			rawContent = "-";
			break;

		default:
			rawContent = content;
	}

	return { __html: rawContent };
}