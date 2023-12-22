const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://dipakmali100:Dipak1234@cluster1.uzuf15o.mongodb.net/LingoQuest"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(() => {
    console.log("Connection failed");
  });

// Schema for the "user" collection
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
});

const chapterSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    "option-1": String,
    "option-2": String,
    "option-3": String,
    "option-4": String,
  },
  answer: {
    type: String,
    required: true,
  },
  remark: {
    type: Boolean,
    default: false,
  },
});

const languageChapterSchema = new mongoose.Schema({
  type: Map,
  of: chapterSchema,
});

const languageSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true,
  },
  chapters: {
    type: Map,
    of: languageChapterSchema,
    required: true,
  },
});

const performanceChapterSchema = new mongoose.Schema({
  type: Map,
  of: chapterSchema,
});

const performanceSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  xp: {
    type: Number,
    required: true,
  },
  currentChapter:{
    type:Number,
    required:true
  },
  chapters: {
    type: Map,
    of: performanceChapterSchema,
    required: true,
  },
});

const Users = mongoose.model("Users", userSchema);
const LanguageModel = mongoose.model("LanguageModel", languageSchema);
const Performance = mongoose.model("Performance", performanceSchema);
// Export both models
module.exports = {
  Users,
  Performance,
  LanguageModel,
};

