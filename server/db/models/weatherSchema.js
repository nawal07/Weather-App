import { Schema, model } from 'mongoose';

const weatherSchema = Schema({
  temperature: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
    enum: ['Delhi', 'Moscow', 'Paris', 'New York', 'Sydney', 'Riyadh'],
    default: 'Delhi',
  },
  weather: {
    type: String,
    required: true,
  },
  temp_feel_like: {
    type: Number,
    trim: true,
  },
  sunset: {
    type: String,
    required: true,
  },
});

const Weather = model('weather', weatherSchema);

export default Product;


