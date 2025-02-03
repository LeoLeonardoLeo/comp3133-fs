const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    require: true,
    trim: true,
    lowercase: true
  },
  lastname: {
    type: String,
    require: [true, "Last name missing"],
    alias: 'surname',
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    require: true,
    trim: true,
    lowercase: true,
    minLengh: 5,
    maxLength: 50,
    validate: function(value){
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    }
  },
  gender: {
    type: String,
    require: true,
    trim: true,
    enum: ['male', 'female', 'other']
  },
  city:{
    type: String
  },
  designation: {
    type: String
  },
  salary: {
    type: Number,
    default: 0.0,
    validate: function(value){
      if(value < 0){
        throw new Error("Negative salary not allowed")
      }
    }
  },
  created: { 
    type: Date,
    default: Date.now
  },
  updatedat: { 
    type: Date,
    default: Date.now
  },
});

//Declare Virtual Fields
EmployeeSchema.virtual('fullname')
  .get(function(){
    return `${this.firstname} ${this.lastname}`
  })

//Custom Schema Methods
//1. Instance Method Declaration
EmployeeSchema.methods.getFullName = function(){
  return `${this.firstname} ${this.lastname}`
}

EmployeeSchema.methods.getSalary = function(){
  return `CAD ${this.salary}`
}

//2. Static method declararion
EmployeeSchema.static('getEmployeeByFirstName', function (fnm){
  return this.find({firstname: fnm})
})

//Writing Query Helpers
EmployeeSchema.query.byFirstName = function(fnm){
  return this.where({firstname: fnm})
}


EmployeeSchema.pre('save', (next) => {
  console.log("Before Save")
  let now = Date.now()
   
  this.updatedat = now
  // Set a value for createdAt only if it is null
  if (!this.created) {
    this.created = now
  }
  
  // Call the next function in the pre-save chain
  next()
});

EmployeeSchema.pre('findOneAndUpdate', (next) => {
  console.log("Before findOneAndUpdate")
  let now = Date.now()
  this.updatedat = now
  console.log(this.updatedat)
  next()
});


EmployeeSchema.post('init', (doc) => {
  console.log('%s has been initialized from the db', doc._id);
});

EmployeeSchema.post('validate', (doc) => {
  console.log('%s has been validated (but not saved yet)', doc._id);
});

EmployeeSchema.post('save', (doc) => {
  console.log('%s has been saved', doc._id);
});

EmployeeSchema.post('remove', (doc) => {
  console.log('%s has been removed', doc._id);
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;