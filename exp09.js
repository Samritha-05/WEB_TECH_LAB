use collegeDB
switched to db collegeDB
db.createCollection("students")
{ ok: 1 }
db.students.insertMany([
  {rollno: 101, name: "Arun", department: "CSE", year: 3, marks: 92},
  {rollno: 102, name: "Priya", department: "ECE", year: 2, marks: 85},
  {rollno: 103, name: "Rahul", department: "CSE", year: 3, marks: 78},
  {rollno: 104, name: "Divya", department: "EEE", year: 1, marks: 67},
  {rollno: 105, name: "Kiran", department: "CSE", year: 2, marks: 88},
  {rollno: 106, name: "Meena", department: "ECE", year: 3, marks: 95},
  {rollno: 107, name: "Vijay", department: "CSE", year: 3, marks: 81},
  {rollno: 108, name: "Anu", department: "IT", year: 2, marks: 73},
  {rollno: 109, name: "Sanjay", department: "ECE", year: 1, marks: 76},
  {rollno: 110, name: "Sneha", department: "CSE", year: 1, marks: 98}
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6acfb1a09c7f035b3237c335'),
    '1': ObjectId('6acfb1a09c7f035b3237c336'),
    '2': ObjectId('6acfb1a09c7f035b3237c337'),
    '3': ObjectId('6acfb1a09c7f035b3237c338'),
    '4': ObjectId('6acfb1a09c7f035b3237c339'),
    '5': ObjectId('6acfb1a09c7f035b3237c33a'),
    '6': ObjectId('6acfb1a09c7f035b3237c33b'),
    '7': ObjectId('6acfb1a09c7f035b3237c33c'),
    '8': ObjectId('6acfb1a09c7f035b3237c33d'),
    '9': ObjectId('6acfb1a09c7f035b3237c33e')
  }
}
db.students.find()
{
  _id: ObjectId('6acfb1a09c7f035b3237c335'),
  rollno: 101,
  name: 'Arun',
  department: 'CSE',
  year: 3,
  marks: 92
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c336'),
  rollno: 102,
  name: 'Priya',
  department: 'ECE',
  year: 2,
  marks: 85
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c337'),
  rollno: 103,
  name: 'Rahul',
  department: 'CSE',
  year: 3,
  marks: 78
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c338'),
  rollno: 104,
  name: 'Divya',
  department: 'EEE',
  year: 1,
  marks: 67
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c339'),
  rollno: 105,
  name: 'Kiran',
  department: 'CSE',
  year: 2,
  marks: 88
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33a'),
  rollno: 106,
  name: 'Meena',
  department: 'ECE',
  year: 3,
  marks: 95
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33b'),
  rollno: 107,
  name: 'Vijay',
  department: 'CSE',
  year: 3,
  marks: 81
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33c'),
  rollno: 108,
  name: 'Anu',
  department: 'IT',
  year: 2,
  marks: 73
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33d'),
  rollno: 109,
  name: 'Sanjay',
  department: 'ECE',
  year: 1,
  marks: 76
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33e'),
  rollno: 110,
  name: 'Sneha',
  department: 'CSE',
  year: 1,
  marks: 98
}
db.students.find({department: "CSE"})
{
  _id: ObjectId('6acfb1a09c7f035b3237c335'),
  rollno: 101,
  name: 'Arun',
  department: 'CSE',
  year: 3,
  marks: 92
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c337'),
  rollno: 103,
  name: 'Rahul',
  department: 'CSE',
  year: 3,
  marks: 78
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c339'),
  rollno: 105,
  name: 'Kiran',
  department: 'CSE',
  year: 2,
  marks: 88
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33b'),
  rollno: 107,
  name: 'Vijay',
  department: 'CSE',
  year: 3,
  marks: 81
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33e'),
  rollno: 110,
  name: 'Sneha',
  department: 'CSE',
  year: 1,
  marks: 98
}
db.students.find({marks: {$gt: 80}})
{
  _id: ObjectId('6acfb1a09c7f035b3237c335'),
  rollno: 101,
  name: 'Arun',
  department: 'CSE',
  year: 3,
  marks: 92
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c336'),
  rollno: 102,
  name: 'Priya',
  department: 'ECE',
  year: 2,
  marks: 85
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c339'),
  rollno: 105,
  name: 'Kiran',
  department: 'CSE',
  year: 2,
  marks: 88
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33a'),
  rollno: 106,
  name: 'Meena',
  department: 'ECE',
  year: 3,
  marks: 95
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33b'),
  rollno: 107,
  name: 'Vijay',
  department: 'CSE',
  year: 3,
  marks: 81
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33e'),
  rollno: 110,
  name: 'Sneha',
  department: 'CSE',
  year: 1,
  marks: 98
}
db.students.find({}, {_id: 0, name: 1, marks: 1})
{
  name: 'Arun',
  marks: 92
}
{
  name: 'Priya',
  marks: 85
}
{
  name: 'Rahul',
  marks: 78
}
{
  name: 'Divya',
  marks: 67
}
{
  name: 'Kiran',
  marks: 88
}
{
  name: 'Meena',
  marks: 95
}
{
  name: 'Vijay',
  marks: 81
}
{
  name: 'Anu',
  marks: 73
}
{
  name: 'Sanjay',
  marks: 76
}
{
  name: 'Sneha',
  marks: 98
}
db.students.find({}, {_id: 0, name: 1, marks: 1})
{
  name: 'Arun',
  marks: 92
}
{
  name: 'Priya',
  marks: 85
}
{
  name: 'Rahul',
  marks: 78
}
{
  name: 'Divya',
  marks: 67
}
{
  name: 'Kiran',
  marks: 88
}
{
  name: 'Meena',
  marks: 95
}
{
  name: 'Vijay',
  marks: 81
}
{
  name: 'Anu',
  marks: 73
}
{
  name: 'Sanjay',
  marks: 76
}
{
  name: 'Sneha',
  marks: 98
}
db.students.find({department: "CSE", year: 3})
{
  _id: ObjectId('6acfb1a09c7f035b3237c335'),
  rollno: 101,
  name: 'Arun',
  department: 'CSE',
  year: 3,
  marks: 92
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c337'),
  rollno: 103,
  name: 'Rahul',
  department: 'CSE',
  year: 3,
  marks: 78
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33b'),
  rollno: 107,
  name: 'Vijay',
  department: 'CSE',
  year: 3,
  marks: 81
}
db.students.find({
  $or: [
    {department: "CSE"},
    {department: "ECE"}
  ]
})
{
  _id: ObjectId('6acfb1a09c7f035b3237c335'),
  rollno: 101,
  name: 'Arun',
  department: 'CSE',
  year: 3,
  marks: 92
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c336'),
  rollno: 102,
  name: 'Priya',
  department: 'ECE',
  year: 2,
  marks: 85
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c337'),
  rollno: 103,
  name: 'Rahul',
  department: 'CSE',
  year: 3,
  marks: 78
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c339'),
  rollno: 105,
  name: 'Kiran',
  department: 'CSE',
  year: 2,
  marks: 88
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33a'),
  rollno: 106,
  name: 'Meena',
  department: 'ECE',
  year: 3,
  marks: 95
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33b'),
  rollno: 107,
  name: 'Vijay',
  department: 'CSE',
  year: 3,
  marks: 81
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33d'),
  rollno: 109,
  name: 'Sanjay',
  department: 'ECE',
  year: 1,
  marks: 76
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33e'),
  rollno: 110,
  name: 'Sneha',
  department: 'CSE',
  year: 1,
  marks: 98
}
db.students.find().sort({marks: 1})
{
  _id: ObjectId('6acfb1a09c7f035b3237c338'),
  rollno: 104,
  name: 'Divya',
  department: 'EEE',
  year: 1,
  marks: 67
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33c'),
  rollno: 108,
  name: 'Anu',
  department: 'IT',
  year: 2,
  marks: 73
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33d'),
  rollno: 109,
  name: 'Sanjay',
  department: 'ECE',
  year: 1,
  marks: 76
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c337'),
  rollno: 103,
  name: 'Rahul',
  department: 'CSE',
  year: 3,
  marks: 78
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33b'),
  rollno: 107,
  name: 'Vijay',
  department: 'CSE',
  year: 3,
  marks: 81
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c336'),
  rollno: 102,
  name: 'Priya',
  department: 'ECE',
  year: 2,
  marks: 85
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c339'),
  rollno: 105,
  name: 'Kiran',
  department: 'CSE',
  year: 2,
  marks: 88
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c335'),
  rollno: 101,
  name: 'Arun',
  department: 'CSE',
  year: 3,
  marks: 92
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33a'),
  rollno: 106,
  name: 'Meena',
  department: 'ECE',
  year: 3,
  marks: 95
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33e'),
  rollno: 110,
  name: 'Sneha',
  department: 'CSE',
  year: 1,
  marks: 98
}
db.students.find().sort({marks: -1}).limit(3)
{
  _id: ObjectId('6acfb1a09c7f035b3237c33e'),
  rollno: 110,
  name: 'Sneha',
  department: 'CSE',
  year: 1,
  marks: 98
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c33a'),
  rollno: 106,
  name: 'Meena',
  department: 'ECE',
  year: 3,
  marks: 95
}
{
  _id: ObjectId('6acfb1a09c7f035b3237c335'),
  rollno: 101,
  name: 'Arun',
  department: 'CSE',
  year: 3,
  marks: 92
}
db.students.countDocuments({department: "CSE"})
5
db.students.updateOne(
  {rollno: 101},
  {$set: {marks: 96}}
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.students.updateMany(
  {department: "CSE"},
  {$set: {status: "Active"}}
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 5,
  modifiedCount: 5,
  upsertedCount: 0
}
db.students.deleteOne({rollno: 104})
{
  acknowledged: true,
  deletedCount: 1
}
db.students.distinct("department")
[ 'CSE', 'ECE', 'IT' ]
db.students.aggregate([
  {
    $group: {
      _id: "$department",
      averageMarks: {$avg: "$marks"}
    }
  }
])
{
  _id: 'IT',
  averageMarks: 73
}
{
  _id: 'CSE',
  averageMarks: 88.2
}
{
  _id: 'ECE',
  averageMarks: 85.33333333333333
}
collegeDB


