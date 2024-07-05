import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017/weather')
  .then(() => {
    console.log('DB connected !');
  })
  .catch(e => {
    console.log(e);
  });

export default mongoose;
