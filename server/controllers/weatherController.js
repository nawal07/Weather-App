import weather from '../db/models/weatherSchema.js'

// @desc Get all Weather details
// @route GET api/v1/weather
// @access Public


export const getWeather = async (req, res) => {
    try {
      const { search, sortby = 'name', sortorder = 'asc' } = req.query;
      const query = {};
  
      return res
        .status(200)
        .json({ success: true, message: 'SUCCESS', resource: weather });
    } catch (e) {
      return res.status(500).json({ success: false, message: e.message });
    }
  };
  