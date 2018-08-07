const mongoose = require('mongoose');
const Schema   = mongoose.Schema;



const scheduleSchema = new Schema({


  monday: [{time: {type: String, default: '12am-1am'}, value: {type: Boolean, default: false}}, {time: {type: String, defualt: "1am-2am"}, value: {type: Boolean, default: false}},{time: {type: String, default: '2am-3am'}, value: {type: Boolean, default: false}} , {time: {type: String, default: '3am-4am'}, value: {type: Boolean, default: false}},
               {time: {type: String, default: '4am-5am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '5am-6am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '6am-7am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '7am-8am'}, value: {type: Boolean, default: false}},
               {time: {type: String, default: '8am-9am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '9am-10am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '10am-11am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '11am-12pm'}, value: {type: Boolean, default: false}}, 
               {time: {type: String, default: '12pm-1pm'}, value:{type: Boolean, default: false}}, {time: {type: String, default: '1pm-2pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '2pm-3pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '3pm-4pm'}, value: {type: Boolean, default: false}}, 
               {time: {type: String, default: '4pm-5pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '5pm-6pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '6pm-7pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '7pm-8pm'}, value: {type: Boolean, default: false}}, 
               {time: {type: String, default: '8am-9pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '9pm-10pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '10pm-11pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '11pm-12am'}, value: {type: Boolean, default: false}}],
  
     tuesday: [{time: {type: String, default: '12am-1am'}, value: {type: Boolean, default: false}}, {time: {type: String, defualt: "1am-2am"}, value: {type: Boolean, default: false}},{time: {type: String, default: '2am-3am'}, value: {type: Boolean, default: false}} , {time: {type: String, default: '3am-4am'}, value: {type: Boolean, default: false}},
               {time: {type: String, default: '4am-5am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '5am-6am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '6am-7am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '7am-8am'}, value: {type: Boolean, default: false}},
               {time: {type: String, default: '8am-9am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '9am-10am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '10am-11am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '11am-12pm'}, value: {type: Boolean, default: false}}, 
               {time: {type: String, default: '12pm-1pm'}, value:{type: Boolean, default: false}}, {time: {type: String, default: '1pm-2pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '2pm-3pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '3pm-4pm'}, value: {type: Boolean, default: false}}, 
               {time: {type: String, default: '4pm-5pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '5pm-6pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '6pm-7pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '7pm-8pm'}, value: {type: Boolean, default: false}}, 
               {time: {type: String, default: '8am-9pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '9pm-10pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '10pm-11pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '11pm-12am'}, value: {type: Boolean, default: false}}],
   
   wednesday:  [{time: {type: String, default: '12am-1am'}, value: {type: Boolean, default: false}}, {time: {type: String, defualt: "1am-2am"}, value: {type: Boolean, default: false}},{time: {type: String, default: '2am-3am'}, value: {type: Boolean, default: false}} , {time: {type: String, default: '3am-4am'}, value: {type: Boolean, default: false}},
                {time: {type: String, default: '4am-5am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '5am-6am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '6am-7am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '7am-8am'}, value: {type: Boolean, default: false}},
                {time: {type: String, default: '8am-9am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '9am-10am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '10am-11am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '11am-12pm'}, value: {type: Boolean, default: false}}, 
                {time: {type: String, default: '12pm-1pm'}, value:{type: Boolean, default: false}}, {time: {type: String, default: '1pm-2pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '2pm-3pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '3pm-4pm'}, value: {type: Boolean, default: false}}, 
                {time: {type: String, default: '4pm-5pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '5pm-6pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '6pm-7pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '7pm-8pm'}, value: {type: Boolean, default: false}}, 
                {time: {type: String, default: '8am-9pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '9pm-10pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '10pm-11pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '11pm-12am'}, value: {type: Boolean, default: false}}],
   
     thursday: [{time: {type: String, default: '12am-1am'}, value: {type: Boolean, default: false}}, {time: {type: String, defualt: "1am-2am"}, value: {type: Boolean, default: false}},{time: {type: String, default: '2am-3am'}, value: {type: Boolean, default: false}} , {time: {type: String, default: '3am-4am'}, value: {type: Boolean, default: false}},
                {time: {type: String, default: '4am-5am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '5am-6am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '6am-7am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '7am-8am'}, value: {type: Boolean, default: false}},
                {time: {type: String, default: '8am-9am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '9am-10am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '10am-11am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '11am-12pm'}, value: {type: Boolean, default: false}}, 
                {time: {type: String, default: '12pm-1pm'}, value:{type: Boolean, default: false}}, {time: {type: String, default: '1pm-2pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '2pm-3pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '3pm-4pm'}, value: {type: Boolean, default: false}}, 
                {time: {type: String, default: '4pm-5pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '5pm-6pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '6pm-7pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '7pm-8pm'}, value: {type: Boolean, default: false}}, 
                {time: {type: String, default: '8am-9pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '9pm-10pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '10pm-11pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '11pm-12am'}, value: {type: Boolean, default: false}}],
  
     friday:   [{time: {type: String, default: '12am-1am'}, value: {type: Boolean, default: false}}, {time: {type: String, defualt: "1am-2am"}, value: {type: Boolean, default: false}},{time: {type: String, default: '2am-3am'}, value: {type: Boolean, default: false}} , {time: {type: String, default: '3am-4am'}, value: {type: Boolean, default: false}},
                {time: {type: String, default: '4am-5am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '5am-6am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '6am-7am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '7am-8am'}, value: {type: Boolean, default: false}},
                {time: {type: String, default: '8am-9am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '9am-10am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '10am-11am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '11am-12pm'}, value: {type: Boolean, default: false}}, 
                {time: {type: String, default: '12pm-1pm'}, value:{type: Boolean, default: false}}, {time: {type: String, default: '1pm-2pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '2pm-3pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '3pm-4pm'}, value: {type: Boolean, default: false}}, 
                {time: {type: String, default: '4pm-5pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '5pm-6pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '6pm-7pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '7pm-8pm'}, value: {type: Boolean, default: false}}, 
                {time: {type: String, default: '8am-9pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '9pm-10pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '10pm-11pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '11pm-12am'}, value: {type: Boolean, default: false}}],
   
     saturday: [{time: {type: String, default: '12am-1am'}, value: {type: Boolean, default: false}}, {time: {type: String, defualt: "1am-2am"}, value: {type: Boolean, default: false}},{time: {type: String, default: '2am-3am'}, value: {type: Boolean, default: false}} , {time: {type: String, default: '3am-4am'}, value: {type: Boolean, default: false}},
                {time: {type: String, default: '4am-5am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '5am-6am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '6am-7am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '7am-8am'}, value: {type: Boolean, default: false}},
                {time: {type: String, default: '8am-9am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '9am-10am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '10am-11am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '11am-12pm'}, value: {type: Boolean, default: false}}, 
                {time: {type: String, default: '12pm-1pm'}, value:{type: Boolean, default: false}}, {time: {type: String, default: '1pm-2pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '2pm-3pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '3pm-4pm'}, value: {type: Boolean, default: false}}, 
                {time: {type: String, default: '4pm-5pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '5pm-6pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '6pm-7pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '7pm-8pm'}, value: {type: Boolean, default: false}}, 
                {time: {type: String, default: '8am-9pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '9pm-10pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '10pm-11pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '11pm-12am'}, value: {type: Boolean, default: false}}],
   
     sunday:   [{time: {type: String, default: '12am-1am'}, value: {type: Boolean, default: false}}, {time: {type: String, defualt: "1am-2am"}, value: {type: Boolean, default: false}},{time: {type: String, default: '2am-3am'}, value: {type: Boolean, default: false}} , {time: {type: String, default: '3am-4am'}, value: {type: Boolean, default: false}},
                {time: {type: String, default: '4am-5am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '5am-6am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '6am-7am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '7am-8am'}, value: {type: Boolean, default: false}},
                {time: {type: String, default: '8am-9am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '9am-10am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '10am-11am'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '11am-12pm'}, value: {type: Boolean, default: false}}, 
                {time: {type: String, default: '12pm-1pm'}, value:{type: Boolean, default: false}}, {time: {type: String, default: '1pm-2pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '2pm-3pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '3pm-4pm'}, value: {type: Boolean, default: false}}, 
                {time: {type: String, default: '4pm-5pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '5pm-6pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '6pm-7pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '7pm-8pm'}, value: {type: Boolean, default: false}}, 
                {time: {type: String, default: '8am-9pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '9pm-10pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '10pm-11pm'}, value: {type: Boolean, default: false}}, {time: {type: String, default: '11pm-12am'}, value: {type: Boolean, default: false}}]
             })








const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  description: String,
  image: {type: String, default: 'images/defaultpicture.jpeg'},
  email: String,
  service: Boolean,
  location: [String],
  twitter: String,
  instagram: String,
  linkedin: String,
  myAppointments: [Array],
  weeklySchedule: scheduleSchema
     

   
});

const User = mongoose.model('User', userSchema);
module.exports = User;