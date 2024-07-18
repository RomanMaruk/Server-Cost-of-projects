import mongoose from 'mongoose';

// {
// 	useNewUrlParser: true,
// 	useCreateIndex: true,
// 	useFindAndModify: false,
// 	useUnifiedTopology: true,
// }

export const connectDB = (url: string) => {
  return mongoose
    .connect(url, {
      dbName: 'Configuration',
    })
    .then(() => {
      console.log('Connect to MongoDB');
    })
    .catch((e) => {
      console.log("Could't connnect to DB", e);
    });
};
