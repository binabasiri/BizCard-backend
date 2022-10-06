const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
	urlId: {
		type: String,
		required: true,
		unique: true,
		match: /^[A-Za-z_\-][A-Za-z0-9_\-]*$/,
	},
	name: { type: String, required: true },
	title: { type: String, required: true },
	views: { type: Number, default: 0 },
	picture: String,
	whatsApp: Number,
	telegramId: String,
	contactNumber: Number,
	instagram: String,
	twitter: String,
	youtube: String,
	linkedIn: String,
	links: [
		{
			name: { type: String, required: true },
			url: { type: String, required: true },
		},
	],
	description: String,
	email: String,
	locationAddress: String,
	locationLink: String,
});

module.exports = mongoose.model("Card", cardSchema);
