const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

// user schema, username & pwd (unique email)
const userSchema = mongoose.Schema({
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        tasks: {
                type: [
                        {
                                text: String,
                                day: String,
                                reminder: Boolean,
                        },
                ],
        },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
