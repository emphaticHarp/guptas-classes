import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    course: {
      type: String,
      enum: ['6-8', '9-10', '11-12'],
      required: true,
    },
    batchTime: {
      type: String,
      required: true,
    },
    parentName: {
      type: String,
      required: true,
    },
    aadharNumber: {
      type: String,
      required: true,
    },
    parentPhone: {
      type: String,
      required: true,
    },
    additionalCourses: [
      {
        type: String,
        enum: ['dress', 'copies', 'smartClasses'],
      },
    ],
    enrollmentStatus: {
      type: String,
      enum: ['pending', 'active', 'completed'],
      default: 'pending',
    },
    enrollmentDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Enrollment || mongoose.model('Enrollment', enrollmentSchema);
