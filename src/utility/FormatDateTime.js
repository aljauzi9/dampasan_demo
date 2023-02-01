export function FormatDatetime(date, options) {
	/* NOTE
	 ** date type ISO and String
	 ** options = { optionIdFull, optionIdShort, optionIdCustom1, optionIdCustom2, optiondefault }
	 */
	const optionIdFull = {
			weekday: "long",
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: false,
			timeZone: "Asia/Jakarta"
		},
		optionIdShort = {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: false,
			timeZone: "Asia/Jakarta"
		},
		optionIdCustom1 = {
			weekday: "long",
			day: "2-digit",
			month: "long",
			year: "numeric",
			timeZone: "Asia/Jakarta"
		},
		optionIdCustom2 = {
			day: "2-digit",
			month: "long",
			year: "numeric",
			timeZone: "Asia/Jakarta"
		};

	let newFormat;
	switch(date) {
		case null:
		case undefined:
		case "":
			newFormat = "-";
			break;

		default:
			let newDate = new Date(date);
			var d = new Date(newDate.getTime() + newDate.getTimezoneOffset() * 60000);

			switch (options) {
				case "optionIdFull":
					newFormat = d.toLocaleString("id-ID", optionIdFull);
					break;
				case "optionIdShort":
					newFormat = d.toLocaleString("id-ID", optionIdShort);
					break;
				case "optionIdCustom1":
					newFormat = d.toLocaleString("id-ID", optionIdCustom1);
					break;
				case "optionIdCustom2":
					newFormat = d.toLocaleString("id-ID", optionIdCustom2);
					break;
				default:
					newFormat = d;
			}
	}

	return newFormat;
}
